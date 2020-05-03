import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


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
        width: '300px',
    }
}


export default props => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form className={classes.root} noValidate autoComplete="off">
                <div><TextField id="standard-basic" label="First name" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="Last name" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="Street" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="City" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="Phone" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="Email" style={styles.text} /></div>
                <div><TextField id="standard-basic" label="Referrer" style={styles.text} /></div>
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