import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import ShopContext, {getTotal} from '../../hooks/ShopContext';
import {API, graphqlOperation} from 'aws-amplify';
import {createOrder as CreateOrder} from '../../graphql/mutations';
import {errorMessages, isValid} from '../UserInfo/errors';
//import uuid from 'uuid/v4';
import {v4 as uuid} from 'uuid';


export default ({style}) => {
    const {state, dispatch} = useContext(ShopContext);

    const {cart} = state;
    const {firstName, lastName, street, city, state: geoState, country, language, phone, email, deliveryDT} = state.userInfo;

    const createOrder = async (id) => {
        const order = {
            id,
            title: `PhoBalo.com`,
            orderNo: id,
            products: JSON.stringify(cart),
            user: `${firstName} ${lastName}`,
            firstName,
            lastName,
            street,
            city,
            state: geoState,
            country,
            language,
            phone,
            email,
            total: getTotal(state),
            deliveryDT: deliveryDT.toISOString(),
            orderDT: (new Date()).toISOString(),
            status: 'ordered',
            //referrer: '',
            //actualDeliveryDT: '',
            //deliverer: '',
            //notes: '',
        };

        try {
            API.graphql(graphqlOperation(CreateOrder, {input: order}))
            return id;

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

        if (Object.keys(state.cart).length == 0) {
            window.alert('Your order is currently empty. Please select products, provide valid user info and submit again.')
        
        } else if (isValidated) {
            if (window.confirm(`You order total is $${getTotal(state)}. Are you sure you want to submit this order?`)) {
                dispatch({type: 'CLEAR'})
                const id = uuid();
                createOrder(id);
                window.alert(`Thank you for ordering from PhoBalo.com! Your order No is #${id}. We will contact you for delivery and payment. Our contact info: (714) 448-9496 / phobalo72@gmail.com.`)
            }

        } else {
            window.alert('Please provide valid user info and submit again.')
        }
    }

    return (
        <Button variant="contained" type="submit" color="secondary" style={style} onClick={submitOrder}>
            Submit Your Order
        </Button>
    )
}