import React, {useContext, useState, useReducer} from 'react';
import data from '../data';

const ShopContext = React.createContext(data);

const genDict = products => {
    let dict = {}
    products.forEach(prod => dict[prod.id] = prod)
    return dict;
}

const getDate = () => {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
}

const getTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}

const defaultState = {
    deliveryFee: 5,
    menu: data.menu,
    products: data.products,
    dict: genDict(data.products),
    cart: {},
    userInfo: {
        firstName: 'John',
        lastName: 'Doe',
        street: '123 Main Str.',
        city: 'Palo Alto',
        state: 'California',
        country: 'USA',
        phone: '40820001234',
        email: 'john@doe.com',
        referrer: 'CAN237',
        deliveryDt: new Date(),
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD': {
            const {id} = action.payload;
            const {cart} = state;
            return {...state, cart: {...cart, [id]: cart[id] ? cart[id] + 1 : 1}}
        }

        case 'REMOVE': {
            const {id} = action.payload;
            const {cart} = state;
            const newCart = {...cart}
            cart[id] > 1 
                ? newCart[id] = cart[id] - 1 
                : delete newCart[id];

            return {...state, cart: {...newCart}}
        }

        case 'UPDATE': {
            const {key, value, parent} = action.payload;
            if (parent) return {...state, [parent]: {...state[parent], [key]: value}}
            return {...state, [key]: value}
        }

        case 'CLEAR': {
            return {...defaultState}
        }

        default:
            return state;
    }
}


export const ShopContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <ShopContext.Provider value={{state, dispatch}}>
            {children}
        </ShopContext.Provider>
    )
}


const calcTax = state => 0.08 * Object.keys(state.cart).reduce( (sum, id) => sum + state.dict[id].price * state.cart[id], 0);
const calcTotal = state => calcTax(state) + state.deliveryFee + Object.keys(state.cart).reduce( (sum, id) => sum + state.dict[id].price * state.cart[id], 0);
export const getTax = state => calcTax(state).toFixed(2); 
export const getTotal = state => calcTotal(state).toFixed(2);
export const getItemTotal = (state, id) => (state.dict[id].price * state.cart[id]).toFixed(2);
export const getNumOfItems = state => Object.keys(state.cart).reduce((sum, id) => sum + state.cart[id], 0);



export default ShopContext;
