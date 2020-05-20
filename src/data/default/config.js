import {entityTypes} from '../../constants';

export const entity = {
    id: 'phobalo',
    url: 'phobalo.com',
    name: 'PhoBalo.com',
    type: entityTypes.retails,
    subtype: entityTypes.restaurant,
}

export const banner = {
    line: "<em style='font-weight:bold;color:red'>Next-day delivery of delicious Vietnamese Pho and Rolls!</em> Serving the cities Palo Alto, Los Altos, Mountain View, and Sunnyvale of California. Order now and get <span style='font-weight:bold;color:red'>30%</span> Grand Opening Discount!",
}

export const navbar = {
    homeIcon: true,
}

export const footer = {
    line: 'PhoBalo.com - 714-448-9496 - phobalo72@gmail.com'
}

export const payment = {
    discounts: {
        grandOpening: {
            name: 'Discount', 
            value: 30,
            unit: 'percent',
            unitPostfix: '%'
        }
    },
    checkout: {
        step1: ({id, total}) => (`You order total is $${total}. Are you sure you want to submit this order?`),

        step2: ({id, total}) => (`Thank you for ordering from PhoBalo.com! Your order No is #${id}. We will contact you for delivery and payment (cash, check, Zelle or Venmo). Our contact info is (714) 448-9496 / phobalo72@gmail.com`)
    }
}


export const geo = {
    locations: [{
            name: 'Palo Alto, CA',
            city: 'Palo Alto',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Los Altos, CA',
            city: 'Los Altos',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Mountain View, CA',
            city: 'Mountain View',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Sunnyvale, CA',
            city: 'Sunnyvale',
            state: 'California',
            zipCode: [],
        }
    ]
}

export const menu = ['G1', 'C1', 'G2', 'R1', 'R2', 'N1'];

export const products = [
    {
        id: 'G1',
        name: 'Beef Pho',
        description: 'Beef noodle soup, $12.00 / bowl',
        native: 'Pho bo',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoBo.jpg',
        choices: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
    }, {
        id: 'G2',
        name: 'Extras',
        description: 'Extra noodles ($2.00), beef, or chicken, $4.00 per portion',
        native: 'Them thuc an',
        price: '2.00',
        unit: 'portion',
        image: '/images/bunPho2.jpg',
        choices: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8']
    }, {
        id: 'B1',
        name: 'Pho tai',
        description: 'steak',
        native: 'Pho tai',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoBo.jpg',
        isNameNative: true,
    }, {
        id: 'B2',
        name: 'Pho tai bo vien',
        description: 'steak and meatballs',
        native: 'Pho tai bo vien',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoGa.jpg',
        isNameNative: true,
    }, {
        id: 'B3',
        name: 'Pho bo vien',
        description: 'meatballs',
        native: 'Pho bo vien',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoGa.jpg',
        isNameNative: true,
    }, {
        id: 'B4',
        name: 'Pho tai chin',
        description: 'steak and brisket',
        native: 'Pho tai chin',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoGa.jpg',
        isNameNative: true,
    }, { 
        id: 'B5',
        name: 'Pho tai nam gau',
        description: 'steak, flank and fatty flank',
        native: 'Pho tai nam gau',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoGa.jpg',
        isNameNative: true,
    }, { 
        id: 'B6',
        name: 'Pho tai nam gan',
        description: 'steak, flank and tendon',
        native: 'Pho tai nam gan',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoGa.jpg',
        isNameNative: true,
    }, { 
        id: 'B7',
        name: 'Pho tai gan',
        description: 'steak and tendon',
        native: 'Pho tai gan',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoGa.jpg',
        isNameNative: true,
    }, { 
        id: 'B8',
        name: 'Pho dac biet',
        description: 'everything',
        native: 'Pho dac biet',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoBo.jpg',
        isNameNative: true,
    }, {
        id: 'C1',
        name: 'Chicken Pho',
        description: 'Chicken noodle soup',
        native: 'Pho ga',
        price: '12.00',
        unit: 'bowl',
        image: '/images/phoGa4.jpg',
    }, {
        id: 'C2',
        name: 'Popcorn Chicken',
        description: 'Fried chicken nuggets',
        native: 'Ga ran',
        price: '5.00',
        unit: 'box',
        image: '/images/popcornChicken3.jpg',
    }, {
        id: 'R1',
        name: 'Eggroll',
        description: 'Fried rolls of ground pork and veggies',
        native: 'Cha gio',
        price: '2.00',
        unit: 'roll',
        image: '/images/chaGio.jpg',
    }, {
        id: 'R2',
        name: 'Spring Roll',
        description: 'Rice paper rolls with shrimp and pork',
        native: 'Goi cuon',
        price: '2.00',
        unit: 'roll',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'E1',
        name: 'Extra noodles',
        description: 'Extra noodles',
        native: 'Them bun',
        price: '2.00',
        unit: 'portion',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'E2',
        name: 'Extra chicken',
        description: 'Extra chicken',
        native: 'Them ga',
        price: '4.00',
        unit: 'portion',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'E3',
        name: 'Extra steak (tai)',
        description: 'Extra steak (tai)',
        native: 'Them tai',
        price: '4.00',
        unit: 'portion',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'E4',
        name: 'Extra meatballs (vien)',
        description: 'Extra meatballs',
        native: 'Them bo vien',
        price: '4.00',
        unit: 'portion',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'E5',
        name: 'Extra brisket (chin)',
        description: 'Extra brisket',
        native: 'Them bo chin',
        price: '4.00',
        unit: 'portion',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'E6',
        name: 'Extra flank (nam)',
        description: 'Extra flank',
        native: 'Them nam',
        price: '4.00',
        unit: 'portion',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'E7',
        name: 'Extra fatty flank (gau)',
        description: 'Extra fatty flank',
        native: 'Them gau',
        price: '4.00',
        unit: 'portion',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'E8',
        name: 'Extra tendon (gan)',
        description: 'Extra tendon',
        native: 'Them gan',
        price: '4.00',
        unit: 'portion',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'N1',
        name: 'Grilled Pork & Rice Noodles',
        description: 'Grilled pork with rice noodles',
        native: 'Bun thit nuong',
        price: '12.00',
        unit: 'bowl',
        image: '/images/bunThitNuong.jpg',
    }
]

export const content = {
    cartHeading: 'Your Order',
    userInfoHeading: 'Your Info',
}

export default {
    products,
    menu,
    entity,
    banner,
    navbar,
    footer,
    payment,
    geo,
    content,
}