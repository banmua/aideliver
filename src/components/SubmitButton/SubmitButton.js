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

    const {cart, entity} = state;
    const {firstName, lastName, street, city, state: geoState, country, language, phone, email, deliveryDT} = state.userInfo;

    const createOrder = async (id) => {
        const order = {
            id,
            title: `PhoBalo.com`,
            orderNo: id,
            products: JSON.stringify(cart),
            user: state.login.userName || `${firstName} ${lastName}`,
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
            entity: entity.id,
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
            const id = uuid();
            const total = getTotal(state);
            if (window.confirm(state.payment.checkout.step1({id, total}))) {
                dispatch({type: 'CLEAR'})
                createOrder(id);
                window.alert(state.payment.checkout.step2({id, total}));
                window.scrollTo(0, 0); 
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