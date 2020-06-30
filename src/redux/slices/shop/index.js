import { createSlice } from '@reduxjs/toolkit';
import data  from '../../../data';
import moment from 'moment';

const genDict = products => {
    let dict = {}
    products.forEach(prod => dict[prod.id] = prod)
    return dict;
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

const admins = ['ThachLe', 'ThanhLe', 'PhuongLe', 'TrangPham', 'PhoBalo', 'camchan'];
export const getAdmins = () => admins;

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
    const referrer = rawReferrer.trim().toLowerCase();

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

const noop = (state, action) => state;

export const shop = createSlice({
  name: 'shop',
  initialState: defaultState,
  reducers: {
    add: (state, action) => {
        const {id} = action.payload;
        state.cart[id] = state.cart[id] ? state.cart[id] + 1 : 1;
    },

    remove: (state, action) => {
        const {id} = action.payload;
        if (state.cart[id] > 1) state.cart[id] = state.cart[id] - 1 
        else delete state.cart[id];
    },

    update: (state, action) => {
        const {key, value, group} = action.payload;
        if (group) state[group][key] = value;
        else state[key] = value;
    },

    clear: (state) => {
        const newState = {...defaultState, userInfo: {...defaultState.userInfo, deliveryDT: genDT()}};
        Object.assign(state, newState);
    },

    setOrders: noop,
  },
});

//export const { add, remove, increment, decrement, incrementByAmount } = shop.actions;
export const { add, remove, update, clear, setOrders } = shop.actions;


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default shop;
