import React, {useState, useContext, useEffect} from 'react';
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

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

export default props => {
    const classes = useStyles();
    const {state, dispatch} = useContext(ShopContext);
    const {firstName, lastName, street, city, phone, email, referrer, deliveryDT} = state.userInfo;

    const update = (key, value, parent) => {
        dispatch({type: 'UPDATE', payload: {key, value, parent}});
        dispatch({type: 'UPDATE', payload: {key, value: isValid(key, value, true), parent: 'isValid'}});
    }

    const fields = ['firstName', 'lastName', 'street', 'city', 'phone', 'email', 'deliveryDate', 'deliveryTime'];
    const errors = {};
    fields.forEach(field => {
        const flag = isValid2(field, state, state.errorChecking);
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
                            onChange={event => update('firstName', event.target.value, 'userInfo')}
                        /></div>
                <div><TextField id="standard-basic" label="Last name" 
                            style={errors.lastName ? styles.textError : styles.text} 
                            error={errors.lastName}
                            helperText={errors.lastName ? errorMessages.lastName : ''}
                            value={lastName} 
                            onChange={event => update('lastName', event.target.value, 'userInfo')}
                        /></div>
                <div><TextField id="standard-basic" label="Street"
                            style={errors.street ? styles.textError : styles.text} 
                            error={errors.street}
                            helperText={errors.street ? errorMessages.street : ''}
                            value={street} 
                            onChange={event => update('street', event.target.value, 'userInfo')}
                        /></div>
               <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label" style={errors.city ? styles.textError : styles.text} >City</InputLabel>
                        <Select labelId={`city`} id={`city`} 
                                    style={errors.city ? styles.textError : styles.text} 
                                    error={errors.city}
                                    value={city} 
                                    onChange={event => update('city', event.target.value, 'userInfo')}>
                            {state.geo.locations.map((loc, i) => 
                                <MenuItem key={`${loc.name}_${i}`} value={loc.city}>{loc.name}</MenuItem>
                            )}
                            {/* <MenuItem value={"Palo Alto"}>Palo Alto, CA</MenuItem>
                            <MenuItem value={"Los Altos"}>Los Altos, CA</MenuItem>
                            <MenuItem value={"Mountain View"}>Mountain View, CA</MenuItem>
                            <MenuItem value={"Sunnyvale"}>Sunnyvale, CA</MenuItem> */}
                        </Select>
                        <FormHelperText style={styles.textError}>{errors.city ? errorMessages.city : ''}</FormHelperText>
                    </FormControl>
                </div>

                <div><TextField id="standard-basic" label="Phone" 
                            style={errors.phone ? styles.textError : styles.text} 
                            error={errors.phone}
                            helperText={errors.phone ? errorMessages.phone : ''}
                            value={phone} 
                            onChange={event => update('phone', event.target.value, 'userInfo')}
                        /></div>
                <div><TextField id="standard-basic" label="Email" style={styles.text} 
                            style={errors.email ? styles.textError : styles.text} 
                            error={errors.email}
                            helperText={errors.email ? errorMessages.email : ''}
                            value={email} 
                            onChange={event => update('email', event.target.value, 'userInfo')}
                        /></div>
                {/* <div><TextField id="standard-basic" label="Referrer Code" style={styles.text} 
                            value={referrer} onChange={event => update('referrer', event.target.value, 'userInfo')}
                        /></div> */}
                <div><KeyboardDatePicker style={styles.text}
                        //margin="normal"
                        id="date-picker-dialog"
                        label="Delivery Date"
                        format="MM/dd/yyyy"

                        style={errors.deliveryDate ? styles.textError : styles.text} 
                        error={errors.deliveryDate}
                        helperText={errors.deliveryDate ? errorMessages.deliveryDate : ''}

                        value={deliveryDT}
                        onChange={date => update('deliveryDT', date, 'userInfo')}
                        KeyboardButtonProps={{'aria-label': 'change date'}}
                    />
                </div>
                <div><KeyboardTimePicker style={styles.text}
                        //margin="normal"
                        id="time-picker"
                        label="Delivery Time"

                        style={errors.deliveryTime ? styles.textError : styles.text} 
                        error={errors.deliveryTime}
                        helperText={errors.deliveryTime ? errorMessages.deliveryTime : ''}

                        value={deliveryDT}
                        onChange={date => update('deliveryDT', date, 'userInfo')}
                        KeyboardButtonProps={{'aria-label': 'change time'}}
                    />
                </div>
            </form>
        </MuiPickersUtilsProvider>
    )
}