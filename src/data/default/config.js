import {entityTypes} from '../../constants';

const promos = {
    'PhoNow06': {
            codes: 'phonow06',  
            name: 'PhoNow06',
            value: 20,
            unit: 'percent',
            unitPostfix: '%',
            startDate: '05/28/2020',
            endDate: '06/07/2020',
            qty: 50,
        }
    }
    
// "M11E-2TLC-AK95",
    // "T8A8-1WDB-QND5",
    // "AX9C-V5NB-75FT",
    // "MXV3-CVP5-T2NF",
    // "XH01-WQQN-BDC7",

export const entity = {
    id: 'phobalo',
    url: 'phobalo.com',
    name: 'PhoBalo.com',
    type: entityTypes.retails,
    subtype: entityTypes.restaurant,
}

export const banner = {
    line: "<em style='font-weight:bold;color:red'>Next-day delivery of delicious Vietnamese Pho and Rolls!</em> Serving the cities Atherton, Menlo Park, Stanford, Palo Alto, East Palo Alto, Los Altos, Los Altos Hills, Mountain View, Sunnyvale and Cupertino of California.",
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
    line: 'PhoBalo.com - 650-935-0455 - phobalo72@gmail.com'
}

export const payment = {
    promos,
    discounts: {
        // grandOpening: {
        //     name: 'Discount', 
        //     value: 30,
        //     unit: 'percent',
        //     unitPostfix: '%'
        // }
    },
    checkout: {
        step1: ({id, total}) => (`You order total is $${total}. Are you sure you want to submit this order?`),

        step2: ({id, total}) => (`Thank you for ordering from PhoBalo.com! Your order No is #${id}. We will contact you for delivery and payment (cash, check, Zelle or Venmo). Our contact info is (650) 935-0455 / phobalo72@gmail.com`)
    }
}


export const geo = {
    locations: [
        {
            name: 'Atherton, CA',
            city: 'Atherton',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Menlo Park, CA',
            city: 'Menlo Park',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Stanford, CA',
            city: 'Stanford',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Palo Alto, CA',
            city: 'Palo Alto',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'East Palo Alto, CA',
            city: 'East Palo Alto',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Los Altos, CA',
            city: 'Los Altos',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Los Altos Hills, CA',
            city: 'Los Altos Hills',
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
        }, {
            name: 'Cupertino, CA',
            city: 'Cupertino',
            state: 'California',
            zipCode: [],
        }
    ]
}

export const menu = ['G1', 'C1', 'G2', 'N1', 'R2', 'R1', 'R3'];

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
        choices: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9']
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
        name: 'Eggrolls',
        description: 'Fried rolls of ground pork and veggies',
        native: 'Cha gio',
        price: '2.00',
        unit: 'roll',
        image: '/images/chaGio.jpg',
    }, {
        id: 'R2',
        name: 'Spring Rolls',
        description: 'Rice paper rolls with shrimp and pork',
        native: 'Goi cuon',
        price: '2.00',
        unit: 'roll',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'R3',
        name: 'Seafood Eggrolls',
        description: 'Seafood eggrolls',
        native: 'Cha gio hai san',
        price: '3.00',
        unit: 'roll',
        image: '/images/chaGioHaiSan.jpg',
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
        id: 'E9',
        name: 'Extra broth',
        description: 'Extra beef broth',
        native: 'Them nuoc leo',
        price: '7.00',
        unit: 'portion',
        image: '/images/goiCuon.jpg',
    }, {
        id: 'N1',
        name: 'Grilled Pork & Rice Noodles',
        description: 'Grilled pork with rice noodles',
        native: 'Bun thit nuong',
        price: '12.00',
        unit: 'bowl',
        image: '/images/bunThitNuong2.jpg',
    }
]

export const content = {
    cartHeading: 'Your Order',
    userInfoHeading: 'Your Info',
}

export const time = {
    delivery: {
        monday: [{time: '12:0', label: '12:00 PM', qty: 6}, {time: '17:30', label: '5:30 PM', qty: 6}, {time: '18:30', label: '6:30 PM', qty: 6}],
        tuesday: [{time: '12:0', label: '12:00 PM', qty: 6}, {time: '17:30', label: '5:30 PM', qty: 6}, {time: '18:30', label: '6:30 PM', qty: 6}],
        wednesday: [{time: '12:0', label: '12:00 PM', qty: 6}, {time: '17:30', label: '5:30 PM', qty: 6}, {time: '18:30', label: '6:30 PM', qty: 6}],
        thursday: [{time: '12:0', label: '12:00 PM', qty: 6}, {time: '17:30', label: '5:30 PM', qty: 6}, {time: '18:30', label: '6:30 PM', qty: 6}],
        friday: [
            {time: '11:0', label: '11:00 AM', qty: 6}, 
            {time: '12:0', label: '12:00 PM', qty: 6}, 
            {time: '17:0', label: '5:00 PM', qty: 6}, 
            {time: '18:0', label: '6:00 PM', qty: 6},
            {time: '19:0', label: '7:00 PM', qty: 6}
        ],
        saturday: [
                {time: '9:0', label: '9:00 AM', qty: 6}, 
                {time: '11:0', label: '11:00 AM', qty: 6}, 
                {time: '12:0', label: '12:00 PM', qty: 6}, 
                {time: '14:0', label: '2:00 PM', qty: 6},
                {time: '17:0', label: '5:00 PM', qty: 6}, 
                {time: '18:0', label: '6:00 PM', qty: 6},
                {time: '19:0', label: '7:00 PM', qty: 6}
            ],
        sunday: [
            {time: '9:0', label: '9:00 AM', qty: 6}, 
            {time: '11:0', label: '11:00 AM', qty: 6}, 
            {time: '12:0', label: '12:00 PM', qty: 6}, 
            {time: '14:0', label: '2:00 PM', qty: 6},
            {time: '17:0', label: '5:00 PM', qty: 6}, 
            {time: '18:0', label: '6:00 PM', qty: 6},
            {time: '19:0', label: '7:00 PM', qty: 6}
        ],
    }
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
    time,
}