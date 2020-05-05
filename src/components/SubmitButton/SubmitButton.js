import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import ShopContext, {getTotal} from '../../hooks/ShopContext';
import {API, graphqlOperation} from 'aws-amplify';
import {createOrder as CreateOrder} from '../../graphql/mutations';
import uuid from 'uuid/v4';


export default ({style}) => {
    const {state, dispatch} = useContext(ShopContext);

    const {cart} = state;
    const {firstName, lastName, street, city, phone, email, referrer, deliveryDT} = state.userInfo;

    const createOrder = async () => {
        const id = uuid();
        try {
            API.graphql(graphqlOperation(CreateOrder, {
                input: {
                    id,
                    title: `PhoBalo.com Order #${id}`,
                    orderNo: id,
                    products: JSON.stringify(cart),
                    user: `${firstName} ${lastName}`,
                    address: `${street}, ${city}`,
                    phone,
                    email,
                    total: getTotal(state),
                }
            }))

        } catch (err) {
            console.log('>>> ERROR:', err);
        }
    }

    const submitOrder = () => {
        if (window.confirm('Are you sure to submit this order?')) {
            const id = uuid();
            console.log('>>> ORDER:', id, cart, state.userInfo, getTotal(state));
            createOrder();
            dispatch({type: 'CLEAR'})
        }
    }

    return (
        <Button variant="contained" type="submit" color="secondary" style={style} onClick={submitOrder}>
            Submit Your Order
        </Button>
    )
}