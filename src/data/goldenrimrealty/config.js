import defaultConfig from '../default';
import {entityTypes} from '../../constants';

export const entity = {
    url: 'goldenrimrealty.com',
    name: 'Golden Rim Realty',
    type: entityTypes.appointment,
    subtype: entityTypes.realty,
}

export const banner = {
    line: "<em>We find the best deals for you!</em> -- Golden Rim Realty",
}

export const navbar = {
    ...defaultConfig.navbar,
    homeIcon: false,
}

export const footer = {
    line: 'goldenrimrealty.com - 714-600-5806 - thanhlenow@gmail.com - Mr. Le'
}


export const payment = {
    discounts: {},
    checkout: {
        step1: ({id, total}) => (`You order total is $${total}. Are you sure you want to submit this order?`),

        step2: ({id, total}) => (`Thank you for ordering from PhoBalo.com! Your order No is #${id}. We will contact you for delivery and payment (cash, check, Zelle or Venmo). Our contact info is (714) 600-5806 / thanhlenow@gmail.com`)
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

export const menu = ['M1', 'M2', 'M3', 'M4', 'C1'];

export const products = [
     {
        id: 'M1',
        name: 'Euclid Ave',
        description: 'single-family',
        native: 'Mia',
        price: '540000',
        unit: '',
        image: '/images/goldenrimrealty/forRent2.jpg',
        isNameNative: true,
        limit: 1,
    }, {
        id: 'M2',
        name: 'Hanover Ave',
        description: 'townhouse, 2br/2ba',
        native: 'Pho tai bo vien',
        price: '2300',
        unit: 'per month',
        image: '/images/goldenrimrealty/apt2.jpg',
        isNameNative: true,
        limit: 1,
    }, {
        id: 'M3',
        name: 'Mapple Dr',
        description: 'cabin in Mammoth',
        native: 'Pho bo vien',
        price: '600',
        unit: 'week',
        image: '/images/goldenrimrealty/mapple2.jpg',
        isNameNative: true,
        limit: 1,
    }, {
        id: 'M4',
        name: 'Sierra Lane',
        description: 'Airbnb',
        native: 'Pho tai chin',
        price: '120',
        unit: 'day',
        image: '/images/goldenrimrealty/pool2.jpg',
        isNameNative: true,
        limit: 1,
    }, {
        id: 'C1',
        name: 'Stuben Dr',
        description: 'Memphis, TN (out state)',
        native: 'Cafe sua da',
        price: '35000',
        unit: '',
        image: '/images/goldenrimrealty/stuben2.jpg',
        isNameNative: true,
        limit: 1,
    }
]

export const content = {
    ...defaultConfig.content,
    cartHeading: 'Showing Request',
}

export default {
    ...defaultConfig,
    products,
    menu,
    entity,
    banner,
    footer,
    payment,
    geo,
    content,
    navbar,
}