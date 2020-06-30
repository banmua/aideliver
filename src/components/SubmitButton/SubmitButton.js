import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {getTotal, clear, update} from '../../redux/slices/shop';
import Button from '@material-ui/core/Button';
import ShopContext from '../../hooks/ShopContext';
import {API, graphqlOperation} from 'aws-amplify';
import {createOrder as CreateOrder} from '../../graphql/mutations';
import {errorMessages, isValid, isValid2} from '../UserInfo/errors';
//import uuid from 'uuid/v4';
import {v4 as uuid} from 'uuid';
import { propStyle } from 'aws-amplify-react';

const formFields = ['firstName', 'lastName', 'street', 'city', 'phone', 'email', 'referrer', 'deliveryDate', 'deliveryTime'];

const SubmitButton = ({style, clear, update, shop}) => {
    const {state, dispatch} = useContext(ShopContext);

    const {cart, entity} = shop;
    const {firstName, lastName, street, city, state: geoState, country, language, 
        phone, email, referrer, deliveryDT} = shop.userInfo;

    const createOrder = async (id) => {
        const order = {
            id,
            title: `PhoBalo.com`,
            orderNo: id,
            products: JSON.stringify(cart),
            user: shop.login.userName || `${firstName} ${lastName}`,
            firstName,
            lastName,
            street,
            city,
            state: geoState,
            country,
            language,
            phone,
            email,
            total: getTotal(shop),
            deliveryDT: deliveryDT.toISOString(),
            orderDT: (new Date()).toISOString(),
            status: 'ordered',
            referrer,
            //actualDeliveryDT: '',
            //deliverer: '',
            //notes: '',
            entity: entity.id,
        };

        await API.graphql(graphqlOperation(CreateOrder, {input: order}))
        return id;
    }

    const validate = () => {
        const fields = formFields;

        const reducer = (acc, field) => acc && shop.isValid[field];
        return fields.reduce(reducer, true);
    }

    const validate2 = () => {
        if (!shop?.userInfo) return false;

        const fields = formFields;
        const reducer = (acc, field) => {
            const value = ['deliveryDate', 'deliveryTime'].includes(field) ? shop.userInfo.deliveryDT : shop.userInfo[field];
            return acc && isValid2(field, shop, true)
        }

        return fields.reduce(reducer, true);
    }

    const submitOrder = async () => {
        dispatch({type: 'UPDATE', payload: {key: 'errorChecking', value: true}});
        update({key: 'errorChecking', value: true});
        const isValidated = validate2();
        
        if (Object.keys(shop.cart).length == 0) {
            window.alert('Your order is currently empty. Please select products, provide valid user info and submit again.')
        
        } else if (isValidated) {
            const id = uuid();
            const total = getTotal(shop);

            if (window.confirm(shop.payment.checkout.step1({id, total}))) {
                try {
                    await createOrder(id);
                    //dispatch({type: 'CLEAR'})
                    clear();
                    window.alert(shop.payment.checkout.step2({id, total}));
                    window.scrollTo(0, 0); 
                } catch (error) {
                    window.alert(shop.payment.checkout.error);
                }
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

export default connect(state => ({shop: state.shop}), {update, clear})(SubmitButton)