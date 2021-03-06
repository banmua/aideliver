import React, {useEffect, useReducer} from 'react';
import data  from '../data';
import moment from 'moment';
import cc from 'coupon-code';
import { sumerianScene } from 'aws-amplify';

// const coupons = Array.from({length: 10}, (x, i) => cc.generate());
// console.log('>>> COUPONS', coupons);


const admins = ['ThachLe', 'ThanhLe', 'PhuongLe', 'TrangPham', 'PhoBalo', 'camchan'];
export const getAdmins = () => admins;

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

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

const genDT = () => {
    let tomorrow = moment().add(1, 'days').startOf('day');
    const day = moment(tomorrow).format('dddd').toLowerCase();
    const avail = data.time?.delivery ? data.time.delivery[day] : [];

    if (avail.length > 0) {
        const str = `${moment(tomorrow).format('MM/DD/YYYY')} ${avail[0].time}`;
        const dt = moment(str, 'MM/DD/YYYY HH:mm');
        return dt;
    }

    if ([1,2,3,4,5].includes(tomorrow.day())) { // Mon-Fri: 6:30 PM
        return tomorrow.add(18.50, 'hours');
    }
    return tomorrow.add(11, 'hours');       // Sat-Sun: 11 AM
}

const genDT2 = () => {
    let tomorrow = moment().add(1, 'days').startOf('day');
    if ([1,2,3,4,5].includes(tomorrow.day())) {
        return tomorrow.add(18.50, 'hours');
    }
    return tomorrow.add(11, 'hours');
}

const defaultState = {
    deliveryFee: 5,
    menu: data.menu,
    products: data.products,
    dict: genDict(data.products),
    cart: {},
    userInfo: {
        firstName: '',
        lastName: '',
        place: '',
        street: '',
        city: '',
        state: 'California',
        country: 'USA',
        language: 'us-EN',
        phone: '',
        email: '',
        referrer: '',
        deliveryDT: genDT(),
        entity: 'aideliver'
    },
    login: {
        userName: null,
    },
    isValid: {
        firstName: false,
        lastName: false,
        street: false,
        city: false,
        state: false,
        country: false,
        phone: false,
        email: false,
        referrer: false,
        deliveryDate: true,
        deliveryTime: true,
    },
    errorChecking: false,
    entity: data.entity,
    footer: data.footer,
    banner: data.banner,
    payment: data.payment || {discounts: []},
    geo: data.geo || {locations: []},
    content: data.content,
    navbar: data.navbar,
    admin: {
        orders: [],
        dict: {},
    },
    time: data.time,
    freeShipping: data.freeShipping || [],
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
            return {...defaultState, userInfo: {...defaultState.userInfo, deliveryDT: genDT()}}
        }

        case 'SET_ORDERS': {
            const {orders} = action.payload;
            const dict = {};
            orders.forEach(order => dict[order.id] = order);
            return {...state, admin: {...state.admin, orders, dict}}
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

///////////

export const buyOneGetOneFree = state => {
    const {cart, dict} = state;
    const keys = Object.keys(cart);
    let sum = 0;
    keys.forEach(key => {
        const qty = cart[key];
        if (qty > 1) {
            sum = sum + Math.floor(qty/2) * Number(dict[key].price);
        }
    })
    return sum;
}

export const buyTwoGetOneFree = state => {
    const {cart, dict} = state;
    let combi = {};
    Object.keys(cart).forEach(key => {
        if (key.startsWith('B') || key.startsWith('C')) {
            combi['PHO'] = combi['PHO'] ? combi['PHO'] + cart[key] : cart[key];
        } else {
            combi[key] = cart[key]
        }
    })

    let sum = 0;
    Object.keys(combi).forEach(key => {
        const qty = combi[key];
        if (qty > 2) {
            const price = key === 'PHO' ? dict['B1'].price : dict[key].price;
            sum = sum + Math.floor(qty/3) * Number(price);
        }
    })
    return sum;
}

export const freeOrder = (state) => {
    return calcRawSubTotal(state);
}

////////////

const calcDiscount = (discount) => state => {
    if (!discount || !discount.value) return (0).toFixed(2);
    return (calcRawSubTotal(state) * discount.value / 100).toFixed(2);
}

const calcAllDiscounts = state => {
    if (!state.payment || !state.payment.discounts) return 0;
    let sum = 0;
    Object.keys(state.payment.discounts).map(key => {
        sum = sum + calcDiscount(state.payment.discounts[key])(state);
    })
    return sum;
}

const calcPromo = (promo) => state => {
    if (promo.type === 'custom' && promo.calc) {
        return promo.calc(state).toFixed(2);
    }

    if (!promo || !promo.value) return (0).toFixed(2);
    return  promo.freeShipping 
            ? (calcRawSubTotal(state) * promo.value / 100 + state.deliveryFee).toFixed(2)
            : (calcRawSubTotal(state) * promo.value / 100).toFixed(2);
}

const calcAllPromos = state => {
    if (!state.payment || !state.payment.promos) return 0;
    const {referrer: rawReferrer = ''} = state.userInfo;
    const referrer = rawReferrer.trim();
    let sum = 0;
    Object.keys(state.payment.promos)
        .filter(key => referrer && key.toLowerCase() === referrer.toLowerCase())
        .map(key => {
            sum = sum + calcPromo(state.payment.promos[key])(state);
        })
    return sum;
}


const calcRawSubTotal = state => Object.keys(state.cart).reduce( (sum, id) => sum + state.dict[id].price * state.cart[id], 0);

const calcSubTotal = state => (calcRawSubTotal(state) - calcAllDiscounts(state)) - calcAllPromos(state);

const calcTax = state => 0.08 * calcSubTotal(state);
const calcTotal = state => {
    const {referrer: rawReferrer = ''} = state.userInfo;
    const referrer = rawReferrer.trim();

    const shipping = state.freeShipping && state.freeShipping.includes(referrer) ? 0 : state.deliveryFee;
    return calcTax(state) + shipping + calcSubTotal(state);
}

export const getSubTotal = state => calcSubTotal(state).toFixed(2);
export const getTax = state => calcTax(state).toFixed(2); 
export const getTotal = state => calcTotal(state).toFixed(2);
export const getItemTotal = (state, id) => (state.dict[id].price * state.cart[id]).toFixed(2);
export const getNumOfItems = state => Object.keys(state.cart).reduce((sum, id) => sum + state.cart[id], 0);
export const getDiscount = discount => calcDiscount(discount);
export const getPromo = promo => calcPromo(promo);
export const isAdmin = state => !!state.login.userName && admins.includes(state.login.userName);

export default ShopContext;
