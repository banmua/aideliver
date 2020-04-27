import React from 'react';
import Product from './Product';

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }
}

const list = [
    {
        id: 'PHO-001',
        name: 'Beef Pho',
        description: 'Noode with cooked beef slices',
        price: '12.00',
        image: '/images/phoBo.jpg',
    }, {
        id: 'PHO-002',
        name: 'Chicken Pho',
        description: 'Noode with cooked chicken',
        price: '12.00',
        image: '/images/phoGa.jpg',
    }, {
        id: 'ROLL-001',
        name: 'Eggroll',
        description: 'Fried rolls of ground pork and veggies',
        price: '2.00',
        image: '/images/chaGio.jpg',
    }, {
        id: 'ROLL-002',
        name: 'Spring Roll',
        description: 'Rice paper rolls with shrimp and beef',
        price: '2.00',
        image: '/images/goiCuon.jpg',
    }
]

export default props => {
    return (
        <div style={styles.container}>
            {list.map(prod => <Product {...prod} />) }
        </div>
    )
}