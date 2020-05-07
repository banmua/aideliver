import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import ShopContext, {getTotal} from '../../hooks/ShopContext';
import {API, graphqlOperation} from 'aws-amplify';
import {createOrder as CreateOrder} from '../../graphql/mutations';
import {errorMessages, isValid} from '../UserInfo/errors';
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
                    title: `PhoBalo.com`,
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

    const validate = () => {
        const fields = ['firstName', 'lastName', 'street', 'city', 'phone', 'email', 'deliveryDate', 'deliveryTime'];
        const reducer = (acc, field) => acc && state.isValid[field];
        return fields.reduce(reducer, true);
    }

    const submitOrder = () => {
        dispatch({type: 'UPDATE', payload: {key: 'errorChecking', value: true}});

        const isValidated = validate();
        if (isValidated) {
            if (window.confirm('Are you sure to submit this order?')) {
                const id = uuid();
                createOrder();
                dispatch({type: 'CLEAR'})
            }

        } else if (Object.keys(state.cart).length == 0) {
            window.confirm('Your order is currently empty. Please select products and submit again.')
        
        } else {
            window.confirm('Please provide valid user info and submit again.')
        }
    }

    return (
        <Button variant="contained" type="submit" color="secondary" style={style} onClick={submitOrder}>
            Submit Your Order
        </Button>
    )
}