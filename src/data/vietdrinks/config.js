export const entity = {
    url: 'vietdrinks.com',
    name: 'VietDrinks',
}

export const banner = {
    line: "<em>Healthy Juice!</em> Serving the cities of Westminster, Garden Grove, Midway and Fountain Valley of Orange County, California",
}

export const footer = {
    line: 'VietDrinks.com - 714-600-5806 - thanhlenow@gmail.com - Mr. Le'
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
        }
    ]
}

export const menu = ['M1', 'M2', 'M3', 'M4'];

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
        price: '12.00',
        unit: 'bowl',
        image: '/images/vietdrinks/miaQuat.png',
        isNameNative: true,
    }, {
        id: 'M4',
        name: 'Coconut Juice',
        description: 'steak and brisket',
        native: 'Pho tai chin',
        price: '12.00',
        unit: 'bowl',
        image: '/images/vietdrinks/coconutJuice.png',
        isNameNative: true,
    }, 
]

export default {
    products,
    menu,
    entity,
    banner,
    footer,
    geo,
}