import React, {useState} from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '100px auto',
        rowGap: '10px',
    },
    label: {
        //justifySelf: 'end',
    },
    input: {
        width: '250px'
    },
    text: {
        width: '340px',
    },
    city: {
        width: '340px',
        marginTop: '15px',
    }
}


export default props => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date().addHours(1));
    const [city, setCity] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form className={classes.root} noValidate autoComplete="off">
                <div><TextField id="standard-basic" label="First name" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="Last name" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="Street" style={styles.text} /></div>
               <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select labelId={`city`} id={`city`} style={styles.city}
                                    value={city} 
                                    onChange={event => {setCity(event.target.value)}}>
                            <MenuItem value={"Palo Alto, CA"}>Palo Alto, CA</MenuItem>
                            <MenuItem value={"Los Altos, CA"}>Los Altos, CA</MenuItem>
                            <MenuItem value={"Mountain View, CA"}>Mountain View, CA</MenuItem>
                            <MenuItem value={"Sunnyvale, CA"}>Sunnyvale, CA</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div><TextField id="standard-basic" label="Phone" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="Email" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="Referrer Code" style={styles.text} /></div>
                <div><KeyboardDatePicker style={styles.text}
                        //margin="normal"
                        id="date-picker-dialog"
                        label="Delivery Date"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{'aria-label': 'change date'}}
                    />
                </div>
                <div><KeyboardTimePicker style={styles.text}
                        //margin="normal"
                        id="time-picker"
                        label="Delivery Time"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{'aria-label': 'change time'}}
                    />
                </div>
            </form>
        </MuiPickersUtilsProvider>
    )
}