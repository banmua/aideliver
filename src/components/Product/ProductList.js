import React from 'react';
import Product from './Product';

const list = [
    {
        name: 'Beef Noodle Soup (Pho Bo)',
        description: 'Noode with cooked beef slices',
        price: '12.00',
        image: '/images/phoBo.jpg',
    }, {
        name: 'Chicken Noodle Soup (Pho Ga)',
        description: 'Noode with cooked chicken',
        price: '12.00',
        image: '/images/phoGa.jpg',
    }, {
        name: 'Eggrolls (Cha gio)',
        description: 'Fried rolls of ground pork and veggies',
        price: '2.00',
        image: '/images/chaGio.jpg',
    }, {
        name: 'Spring Rolls (Goi Cuon)',
        description: 'Rice paper rolls with shrimp and beef',
        price: '2.00',
        image: '/images/goiCuon.jpg',
    }
]

export default props => {
    return (
        <div>
            {list.map(prod => <Product {...prod} />) }
        </div>
    )
}