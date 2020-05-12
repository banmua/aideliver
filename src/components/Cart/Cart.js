import React, {useContext} from 'react'
import { entityTypes } from '../../constants';
import ShopContext from '../../hooks/ShopContext';
import RetailsCart from './Retails/Cart';
import AppointmentCart from './Appointment/Cart';

export default (props) => {
    const {state, dispatch} = useContext(ShopContext);

    if (state.entity.type === entityTypes.retails) 
        return <RetailsCart  {...props} />;

    else if (state.entity.type === entityTypes.appointment) 
        return <AppointmentCart {...props}/>;

    return <RetailsCart {...props} />;
}
