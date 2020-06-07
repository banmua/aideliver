import React, {useContext, useState, useEffect} from 'react';
import ShopContext from '../../hooks/ShopContext';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';

const DeliveryTime = props => {
    const {state, dispatch} = useContext(ShopContext);
    const {deliveryDT} = state.userInfo;
    const dayOfWeek = moment(deliveryDT).format('dddd').toLowerCase();
    const availTimes = state.time?.delivery ? state.time.delivery[dayOfWeek] : [];

    const getTime = () => {
        const dt = moment(deliveryDT);
        const hour = dt.get('hour');
        const min = dt.get('min');
        const str = `${hour}:${min}`;
        const arr = availTimes.map(obj => obj.time);
        const val = arr.includes(str) ? str : availTimes[0].time;
        return val;
    }

    const [time, setTime] = useState(getTime());

    useEffect(() => {
        setTime(getTime());
    }, [deliveryDT])

    // useEffect(() => {
    //     const str = `${moment(deliveryDT).format('MM/DD/YYYY')} ${time}`;
    //     const dt = moment(str, 'MM/DD/YYYY HH:mm');
    //     dispatch({type: 'UPDATE', payload: {key: 'deliveryDT', value: dt, parent: 'userInfo'}});
    //     dispatch({type: 'UPDATE', payload: {key: 'deliveryTime', value: true, parent: 'isValid'}});
    // }, [time])

    return (
        <FormControl style={{width: '150px'}}>
            <InputLabel id="deliveryTime-label">Avail. delivery time</InputLabel>
            <Select labelId="deliveryTime-label"
                    id="deliveryTime" value={time}
                    onChange={e => setTime(e.target.value)} >
                {availTimes.map(t => <MenuItem key={t.time} value={t.time}>{t.label}</MenuItem>)}
            </Select>
        </FormControl>
        
    )
}

export default DeliveryTime;