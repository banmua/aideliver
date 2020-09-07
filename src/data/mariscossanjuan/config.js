import defaultConfig from '../default';
import {entityTypes} from '../../constants';

export const entity = {
    id: 'mariscossanjuan',
    url: 'mariscossanjuan.com',
    name: 'MariscosSanJuan.com',
    type: entityTypes.retails,
    subtype: entityTypes.restaurant,
}

export const banner = {
    line: "<em style='font-weight:bold;color:red'>Next-day delivery of delicious Spanish seafoods!</em> Serving the cities San Jose, Santa Clara, Campbell and Milpitas of California. <br> <em style='font-weight:bold;color:red'>¡Entrega al día siguiente de deliciosos mariscos españoles!</em> Sirviendo a las ciudades de San José, Santa Clara, Campbell y Milpitas de California.",
}

export const navbar = {
    homeIcon: true,
    searchBar: true,
    searchIcon: true,
    cartIcon: true,
    profileIcon: true,
    leftMenu: true,
}

export const footer = {
    line: '348 Willow St, San Jose, CA 95110 - (408) 993-9765  *  1718 Senter Rd, San Jose, CA 95112 - (408) 286-1738'
}

export const geo = {
    locations: [
        {
            name: 'San Jose, CA',
            city: 'San Jose',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Santa Clara, CA',
            city: 'Santa Clara',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Milpitas, CA',
            city: 'Milpitas',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Campbell, CA',
            city: 'Campbell',
            state: 'California',
            zipCodes: [],
        },
    ]
}

export const menu = ['B1', 'B2', 'B3', 'B4', 'B6', 'B7', 'B8','C1','R1','R2','R3', 'E1','E2','E3'];

export const products = [
    {
        id: 'G1',
        name: 'Beef Pho',
        description: 'Beef noodle soup, $12.00 / bowl',
        native: 'Pho bo',
        price: '12.00',
        unit: 'bowl',
        image: '/images/mariscossanjuan/phoBo.jpg',
        choices: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
    }, {
        id: 'G2',
        name: 'Extras',
        description: 'Extra noodles ($2.00), beef, or chicken, $4.00 per portion',
        native: 'Them thuc an',
        price: '2.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/bunPho2.jpg',
        choices: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9']
    }, {
        id: 'B1',
        name: 'Shrimp Dish',
        description: 'shrimp',
        native: 'Pho tai',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/dish2.jpg',
        isNameNative: true,
    }, {
        id: 'B2',
        name: 'Shrimp Dish',
        description: 'Shrimp',
        native: 'Pho tai bo vien',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/dish3.jpg',
        isNameNative: true,
    }, {
        id: 'B3',
        name: 'Shrimp',
        description: 'Shrimp Dish',
        native: 'Pho bo vien',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/dish.jpg',
        isNameNative: true,
    }, {
        id: 'B4',
        name: 'Crab Dish',
        description: 'Crab & Shrimp',
        native: 'Pho tai chin',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/crab.jpg',
        isNameNative: true,
    }, {
        id: 'B5',
        name: 'Shrimp',
        description: 'shrimp & squid',
        native: 'Pho tai nam gau',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/dish4.jpg',
        isNameNative: true,
    }, {
        id: 'B6',
        name: 'Shrimp',
        description: 'shrimp & squid',
        native: 'Pho tai nam gan',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/dish6.jpg',
        isNameNative: true,
    }, {
        id: 'B7',
        name: 'Fish Dish',
        description: 'whole talapia',
        native: 'Pho tai gan',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/fish.jpg',
        isNameNative: true,
    }, {
        id: 'B8',
        name: 'Soft Taco',
        description: 'Shrimp',
        native: 'Pho dac biet',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/taco.jpg',
        isNameNative: true,
    }, {
        id: 'C1',
        name: 'Shrimp Taco',
        description: 'shrimp',
        native: 'Pho ga',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/taco2.jpg',
    }, {
        id: 'C2',
        name: 'Popcorn Chicken',
        description: 'Fried chicken nuggets',
        native: 'Ga ran',
        price: '5.00',
        unit: 'box',
        image: '/images/mariscossanjuan/popcornChicken3.jpg',
    }, {
        id: 'R1',
        name: 'Fish Taco',
        description: 'fish',
        native: 'Cha gio',
        price: '12.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/taco3.jpg',
    }, {
        id: 'R2',
        name: 'Shrimp Mix',
        description: 'shrimp tray',
        native: 'Goi cuon',
        price: '25.00',
        unit: 'tray',
        image: '/images/mariscossanjuan/taco4.jpg',
    }, {
        id: 'R3',
        name: 'Shrimp Mix 2',
        description: 'Seafood tray',
        native: 'Cha gio hai san',
        price: '30.00',
        unit: 'tray',
        image: '/images/mariscossanjuan/tray.jpg',
    }, {
        id: 'E1',
        name: 'Shrimp Mix 3',
        description: 'Seafood tray',
        native: 'Them bun',
        price: '35.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/tray2.jpg',
    }, {
        id: 'E2',
        name: 'Drink 1',
        description: 'special soda',
        native: 'Them ga',
        price: '5.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/drink.jpg',
    }, {
        id: 'E3',
        name: 'Drink 2',
        description: 'special drink',
        native: 'Them tai',
        price: '5.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/drink2.jpg',
    }, {
        id: 'E4',
        name: 'Extra meatballs (vien)',
        description: 'Extra meatballs',
        native: 'Them bo vien',
        price: '4.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/goiCuon.jpg',
    }, {
        id: 'E5',
        name: 'Extra brisket (chin)',
        description: 'Extra brisket',
        native: 'Them bo chin',
        price: '4.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/goiCuon.jpg',
    }, {
        id: 'E6',
        name: 'Extra flank (nam)',
        description: 'Extra flank',
        native: 'Them nam',
        price: '4.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/goiCuon.jpg',
    }, {
        id: 'E7',
        name: 'Extra fatty flank (gau)',
        description: 'Extra fatty flank',
        native: 'Them gau',
        price: '4.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/goiCuon.jpg',
    }, {
        id: 'E8',
        name: 'Extra tendon (gan)',
        description: 'Extra tendon',
        native: 'Them gan',
        price: '4.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/goiCuon.jpg',
    }, {
        id: 'E9',
        name: 'Extra broth',
        description: 'Extra beef broth',
        native: 'Them nuoc leo',
        price: '7.00',
        unit: 'portion',
        image: '/images/mariscossanjuan/goiCuon.jpg',
    }, {
        id: 'N1',
        name: 'Grilled Pork & Rice Noodles',
        description: 'Grilled pork with rice noodles',
        native: 'Bun thit nuong',
        price: '12.00',
        unit: 'bowl',
        image: '/images/mariscossanjuan/bunThitNuong2.jpg',
    }, {
        id: 'L1',
        name: 'Shaking Beef',
        description: 'beef, rice and salad',
        native: 'Com bo luc lac',
        price: '14.00',
        unit: 'dish',
        image: '/images/mariscossanjuan/comBoLucLac.jpg',
    }, {
        id: 'V1',
        name: 'Veggie Pho',
        description: 'Vegetarian noodle soup',
        native: 'Pho chay',
        price: '12.00',
        unit: 'bowl',
        image: '/images/mariscossanjuan/vegiePho.jpg',
    },
]


export default {
    ...defaultConfig,
    navbar,
    banner,
    footer,
    menu,
    products,
    geo,
    entity,
}