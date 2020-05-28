import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import ShopContext, {getTotal} from '../../hooks/ShopContext';
import {API, graphqlOperation} from 'aws-amplify';
import {createOrder as CreateOrder} from '../../graphql/mutations';
import {errorMessages, isValid, isValid2} from '../UserInfo/errors';
//import uuid from 'uuid/v4';
import {v4 as uuid} from 'uuid';

const formFields = ['firstName', 'lastName', 'street', 'city', 'phone', 'email', 'referrer', 'deliveryDate', 'deliveryTime'];

export default ({style}) => {
    const {state, dispatch} = useContext(ShopContext);

    const {cart, entity} = state;
    const {firstName, lastName, street, city, state: geoState, country, language, phone, email, referrer, deliveryDT} = state.userInfo;

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
            referrer,
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
        const fields = formFields;

        const reducer = (acc, field) => acc && state.isValid[field];
        return fields.reduce(reducer, true);
    }

    const validate2 = () => {
        if (!state?.userInfo) return false;

        const fields = formFields;
        const reducer = (acc, field) => {
            const value = ['deliveryDate', 'deliveryTime'].includes(field) ? state.userInfo.deliveryDT : state.userInfo[field];

            //console.log('>>> VALIDATE', field, value, isValid2(field, state, true), state);

            return acc && isValid2(field, state, true)
        }

        return fields.reduce(reducer, true);
    }

    const submitOrder = () => {
        dispatch({type: 'UPDATE', payload: {key: 'errorChecking', value: true}});
        const isValidated = validate2();
        
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