import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import ShopContext from '../../hooks/ShopContext';
import Layout from '../Layout';
import Status from './Status';
import moment from 'moment';

const styles = {
    container: {
        padding: '10px',
    },
    products: {
        border: '1px solid gray',
        padding: '10px',
        width: '500px'
    },
    product: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr 1fr',
    },
    header: {
        fontWeight: 'bold'
    },
    line: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
    }, 
    userInfo: {
        padding: '10px',
        width: '500px'
    },
    notes: {
        fontSize: '12px',
        fontWeight: 'bold',
    }
}

const Product_Text = ({product}) => {
    if (!product) return null;
    const {id, name, qty, unit} = product;

    return `${id}   ${name} (${qty})\n`;
}

const Products_Text = ({products}) => (
    <pre>
        {/* {`Id    Product (Qty)\n`} */}
        {products && products.map((prod, i) => <Product_Text key={`product_${i}`} product={prod} />)}
    </pre>
)


export default (props) => {
    let { id } = useParams();
    const {state, dispatch} = useContext(ShopContext);
    const orders = state.admin.orders;
    const targetOrders =orders.filter(item => {
        const today = moment();
        const deliveryTime = moment(item.deliveryDT);
        console.log('>>> ID:', today, deliveryTime, item.id, today.add(1, 'days').isSame(deliveryTime, 'd'));
        return today.isSame(deliveryTime, 'd');
    });
    const res = targetOrders.reduce((acc, order) => {
        const prods = JSON.parse(order.products);
        Object.keys(prods).forEach(key => {
            acc[key] = acc[key] ? acc[key] + prods[key] : prods[key];
        })
        return acc;
    }, {});

    console.log('>>> STATE', state);

    return (
        <div>
            <h2>Tomorrow</h2>
            {Object.keys(res).map(id => <pre>{`${id}: ${state.dict[id].name} (${res[id]})`}</pre>)}
            {/* <pre>{JSON.stringify(res, null, 2)}</pre>
            <pre>{JSON.stringify(targetOrders, null, 2)}</pre> */}
        </div>  
    )
}