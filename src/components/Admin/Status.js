import React, {useContext, useState, useEffect} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles, {useStyles} from './styles';
import ShopContext from '../../hooks/ShopContext';


const Status = (props) => {
    const {id, order} = props;
    const classes = useStyles();
    const {state, dispatch} = useContext(ShopContext);
    const [status, setStatus] = useState(order ? order.status : '');
    const [notes, setNotes] = useState('');

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="shop-status"  >Status</InputLabel>
                <Select labelId={`status`} id={`status`} 
                            value={status}
                            onChange={event => setStatus(event.target.value)}
                        >
                    <MenuItem value={"ordered"}>ordered</MenuItem>
                    <MenuItem value={"reordered"}>reordered</MenuItem>
                    <MenuItem value={"confirmed"}>confirmed</MenuItem>
                    <MenuItem value={"in-transit"}>in-transit</MenuItem>
                    <MenuItem value={"delivered"}>delivered</MenuItem>
                    <MenuItem value={"paid"}>paid</MenuItem>
                    <MenuItem value={"completed"}>completed</MenuItem>
                    <MenuItem value={"canceled"}>canceled</MenuItem>
                </Select>
            </FormControl>
            <div style={{marginTop: '20px'}}>
                <TextField id="notes" label="Notes" multiline rows={4} style={{width: '300px'}}
                        defaultValue={notes} variant="outlined" onChange={event => setNotes(event.target.value)}
                    />
            </div>
            <div style={{marginTop: '20px'}}>
                <Button variant="contained" type="submit" color="secondary" onClick={() => {}}>
                    Change Order Status
                </Button>
            </div>
        </div>
    )
}

export default Status;