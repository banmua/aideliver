export const entity = {
    url: 'vietdrinks.com',
    name: 'VietDrinks',
}

export const footer = {
    line: 'VietDrinks.com - 714-500-5806 - thanhlenow@gmail.com'
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
        description: 'meatballs',
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
    entity,
    products,
    menu,
    footer,
}