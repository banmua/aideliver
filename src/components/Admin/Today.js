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
    const todayOrders = orders.filter(item => moment().diff(moment(item.deliveryDT), 'dates') === 0);
    const res = todayOrders.reduce((acc, order) => {
        const prods = JSON.parse(order.products);
        console.log('>>> PRODS', prods);

        Object.keys(prods).forEach(key => {
            acc[key] = acc[key] ? acc[key] + prods[key] : prods[key];
        })
        return acc;
    }, {});

    return (
        <div>
            <h2>Today</h2>
            <pre>{JSON.stringify(res, null, 2)}</pre>
            <pre>{JSON.stringify(state.admin.orders, null, 2)}</pre>
        </div>  
    )
}