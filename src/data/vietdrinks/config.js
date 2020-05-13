import defaultConfig from '../default';
import {entityTypes} from '../../constants';

export const entity = {
    url: 'vietdrinks.com',
    name: 'VietDrinks',
    type: entityTypes.retails,
    subtype: entityTypes.restaurant,
}

export const banner = {
    line: "<em>Healthy, fresh and delicious juice!</em> Serving the cities of Westminster, Garden Grove, Midway and Fountain Valley of Orange County, California",
}

export const footer = {
    line: 'VietDrinks.com - 714-600-5806 - thanhlenow@gmail.com - Mr. Le'
}


export const payment = {
    discounts: {},
    checkout: {
        step1: ({id, total}) => (`You order total is $${total}. Are you sure you want to submit this order?`),

        step2: ({id, total}) => (`Thank you for ordering from VietDrinks.com! Your order No is #${id}. We will contact you for delivery and payment (cash, check, Zelle or Venmo). Our contact info is (714) 600-5806 / thanhlenow@gmail.com`)
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

export const menu = ['M1', 'M2', 'M3', 'M4', 'C1', 'S1'];

export const products = [
     {
        id: 'M1',
        name: 'Mia Straight',
        description: 'sugarcane juice',
        native: 'Mia',
        price: '7.00',
        unit: 'cup',
        image: '/images/vietdrinks/miaStraight.jpg',
        isNameNative: true,
    }, {
        id: 'M2',
        name: 'Mia Melon',
        description: 'mia and watermelon',
        native: 'Pho tai bo vien',
        price: '7.00',
        unit: 'cup',
        image: '/images/vietdrinks/miaMelon.png',
        isNameNative: true,
    }, {
        id: 'M3',
        name: 'Mia Quat',
        description: 'mia quat',
        native: 'Pho bo vien',
        price: '7.00',
        unit: 'cup',
        image: '/images/vietdrinks/miaQuat.png',
        isNameNative: true,
    }, {
        id: 'M4',
        name: 'Coconut Juice',
        description: 'Coconut juice',
        native: 'Pho tai chin',
        price: '7.00',
        unit: 'cup',
        image: '/images/vietdrinks/coconutJuice.png',
        isNameNative: true,
    }, {
        id: 'C1',
        name: 'Viet Ice Coffee',
        description: 'Vietnamese ice coffee',
        native: 'Cafe sua da',
        price: '5.00',
        unit: 'cup',
        image: '/images/vietdrinks/vietIceCoffee.jpg',
        isNameNative: true,
    }, {
        id: 'S1',
        name: 'Ice Coffee Smoothie with Boba',
        description: 'Viet ice coffee smoothie with boba',
        native: 'cafe smoothie voi boba',
        price: '7.00',
        unit: 'cup',
        image: '/images/vietdrinks/vietIceCoffeeSmoothieBoba.jpg',
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