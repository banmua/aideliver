import React from 'react';
import {connect} from 'react-redux';
import {update, clear} from '../../redux/slices/shop';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import ShopContext from '../../hooks/ShopContext';
import styles, {useStyles} from './styles';
import {errorMessages, isValid, isValid2} from './errors';
import DeliveryTime from './DeliveryTime';

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

const UserInfo = ({update, clear, shop}) => {
    const classes = useStyles();
    const {firstName, lastName, street, city, phone, email, referrer, deliveryDT} = shop.userInfo;

    const updateItem = (key, value, group) => {
        update({key, value, group});
        update({key, value: isValid(key, value, true), group: 'isValid'});
    }

    const fields = ['firstName', 'lastName', 'street', 'city', 'phone', 'email', 'referrer', 'deliveryDate', 'deliveryTime'];
    const errors = {};
    fields.forEach(field => {
        const flag = isValid2(field, shop, shop.errorChecking);
        errors[field] = !flag;
    })
    
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form className={classes.root} noValidate autoComplete="off">
                <div><TextField id="standard-basic" label="First name" 
                            style={errors.fistName ? styles.textError : styles.text} 
                            error={errors.firstName}
                            helperText={errors.firstName ? errorMessages.firstName : ''}
                            value={firstName} 
                            onChange={event => updateItem('firstName', event.target.value, 'userInfo')}
                        /></div>
                <div><TextField id="standard-basic" label="Last name" 
                            style={errors.lastName ? styles.textError : styles.text} 
                            error={errors.lastName}
                            helperText={errors.lastName ? errorMessages.lastName : ''}
                            value={lastName} 
                            onChange={event => {updateItem('lastName', event.target.value, 'userInfo')}}
                        /></div>
                <div><TextField id="standard-basic" label="Street"
                            style={errors.street ? styles.textError : styles.text} 
                            error={errors.street}
                            helperText={errors.street ? errorMessages.street : ''}
                            value={street} 
                            onChange={event => updateItem('street', event.target.value, 'userInfo')}
                        /></div>
               <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label" style={errors.city ? styles.textError : styles.text} >City</InputLabel>
                        <Select labelId={`city`} id={`city`} 
                                    style={errors.city ? styles.textError : styles.text} 
                                    error={errors.city}
                                    value={city} 
                                    onChange={event => updateItem('city', event.target.value, 'userInfo')}>
                            {shop.geo.locations.map((loc, i) => 
                                <MenuItem key={`${loc.name}_${i}`} value={loc.city}>{loc.name}</MenuItem>
                            )}
                        </Select>
                        <FormHelperText style={styles.textError}>{errors.city ? errorMessages.city : ''}</FormHelperText>
                    </FormControl>
                </div>

                <div><TextField id="standard-basic" label="Phone" 
                            style={errors.phone ? styles.textError : styles.text} 
                            error={errors.phone}
                            helperText={errors.phone ? errorMessages.phone : ''}
                            value={phone} 
                            onChange={event => updateItem('phone', event.target.value, 'userInfo')}
                        /></div>
                <div><TextField id="standard-basic" label="Email" style={styles.text} 
                            style={errors.email ? styles.textError : styles.text} 
                            error={errors.email}
                            helperText={errors.email ? errorMessages.email : ''}
                            value={email} 
                            onChange={event => updateItem('email', event.target.value, 'userInfo')}
                        /></div>
                <div><TextField id="standard-basic" label="Coupon Code (optional)" style={styles.text} 
                            error={errors.referrer}
                            helperText={errors.referrer ? errorMessages.referrer : ''}
                            value={referrer} 
                            onChange={event => updateItem('referrer', event.target.value, 'userInfo')}
                        /></div>
                <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            columnGap: '0px',
                            width: '380px',
                        }}>
                    <KeyboardDatePicker style={styles.text}
                        //margin="normal"
                        id="date-picker-dialog"
                        label="Delivery Date"
                        format="MM/dd/yyyy"

                        style={errors.deliveryDate ? {...styles.textError, width: '150px'} : {...styles.text, width: '150px'}} 
                        error={errors.deliveryDate}
                        helperText={errors.deliveryDate ? errorMessages.deliveryDate : ''}

                        value={deliveryDT}
                        onChange={date => updateItem('deliveryDT', date, 'userInfo')}
                        KeyboardButtonProps={{'aria-label': 'change date'}}
                    /> 
                    <DeliveryTime />
                </div>
            </form>
        </MuiPickersUtilsProvider>
    )
}

export default connect(state => ({shop: state.shop}), {update, clear})(UserInfo);