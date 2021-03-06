import defaultConfig from '../default';
import {entityTypes} from '../../constants';

export const entity = {
    id: 'cctogo',
    url: 'costcotogo.com',
    name: 'CostcoTogo',
    type: entityTypes.retails,
    subtype: entityTypes.restaurant,
}

export const banner = {
    line: "<em>Enjoy your meals at home and work. Let us bring Costco Foods to you!</em> Serving next-day deliveries for cities of Westminster, Garden Grove, Midway and Fountain Valley of Orange County, California",
}

export const footer = {
    line: 'costcotogo.com - 714-600-5806 - thanhlenow@gmail.com - Mr. Le'
}


export const payment = {
    discounts: {},
    checkout: {
        step1: ({id, total}) => (`You order total is $${total}. Are you sure you want to submit this order?`),

        step2: ({id, total}) => (`Thank you for ordering from costcotogo.com! Your order No is #${id}. We will contact you for delivery and payment (cash, check, Zelle or Venmo). Our contact info is (714) 600-5806 / thanhlenow@gmail.com`)
    }
}

export const geo = {
    locations: [{
            name: 'Westminster, CA',
            city: 'Westminster',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Garden Grove, CA',
            city: 'Garden Grove',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Fountain Valley, CA',
            city: 'Fountain Valley',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Midway, CA',
            city: 'Midway',
            state: 'California',
            zipCode: [],
        }, 
    ]
}

export const menu = ['M1', 'M2', 'M3', 'M4', 'C1', 'S1', 'S2'];

export const products = [
     {
        id: 'M1',
        name: 'Combo Pizza',
        description: 'Combo Pizza.',
        native: 'Mia',
        price: '9.99',
        unit: ' 16in',
        image: '/images/costcotogo/pizzaComboWhole.jpg',
        isNameNative: true,
    }, {
        id: 'M2',
        name: 'Peperoni Pizza',
        description: 'Peperoni Pizza',
        native: 'Pho tai bo vien',
        price: '9.99',
        unit: '16in',
        image: '/images/costcotogo/pizzaPeperoniWhole.jpg',
        isNameNative: true,
    }, {
        id: 'M3',
        name: 'Chicken Caesar Salad',
        description: 'mia quat',
        native: 'Pho bo vien',
        price: '3.99',
        unit: 'bowl',
        image: '/images/costcotogo/chickenCaesarSalad.jpg',
        isNameNative: true,
    }, {
        id: 'M4',
        name: 'Rotisserie Chicken',
        description: 'Hot chicken roaster',
        native: 'Pho tai chin',
        price: '4.99',
        unit: 'chicken',
        image: '/images/costcotogo/rotisserieChicken.jpg',
        isNameNative: true,
    }, {
        id: 'C1',
        name: 'Acai Bowl',
        description: 'Vietnamese ice coffee',
        native: 'Cafe sua da',
        price: '4.99',
        unit: 'bowl',
        image: '/images/costcotogo/acaiBowl.jpg',
        isNameNative: true,
    }, {
        id: 'S1',
        name: 'Hot Dog',
        description: 'Viet ice coffee smoothie with boba',
        native: 'cafe smoothie voi boba',
        price: '1.50',
        unit: 'hot dog + drink',
        image: '/images/costcotogo/hotdog.jpg',
        isNameNative: true,
    }, {
        id: 'S2',
        name: 'Pizza Slice',
        description: 'Viet ice coffee smoothie with boba',
        native: 'cafe smoothie voi boba',
        price: '1.99',
        unit: 'slice',
        image: '/images/costcotogo/pizza.jpg',
        isNameNative: true,
    }, 
]

export default {
    ...defaultConfig,
    products,
    menu,
    entity,
    banner,
    footer,
    payment,
    geo,
}