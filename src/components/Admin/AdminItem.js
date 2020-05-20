import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import ShopContext from '../../hooks/ShopContext';
import Layout from '../Layout';
import Status from './Status';

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

const Product = ({product}) => (
    <div style={styles.product}>
        <span>{product.id}</span>
        <span>{product.name}</span>
        <span>{product.qty}</span>
        <span>{product.unit}</span>
    </div>
)

const Product_Text = ({product}) => {
    if (!product) return null;
    const {id, name, qty, unit} = product;

    return `${id}   ${name} (${qty})\n`;
}

const Products = ({products}) => (
    <div style={styles.products}>
        <div style={{...styles.product, ...styles.header}}>
            <span>Id</span>
            <span>Product</span>
            <span>Qty</span>
            <span>Unit</span>
        </div>
        {products.map(prod => <Product product={prod} />)}
    </div>
)

const Products_Text = ({products}) => (
    <pre>
        {/* {`Id    Product (Qty)\n`} */}
        {products && products.map((prod, i) => <Product_Text key={`product_${i}`} product={prod} />)}
    </pre>
)

const Line =({label, value}) => (
    <div style={styles.line}>
        <span>{label}</span>
        <span>{value}</span>
    </div>
)

const UserInfo = ({order: {firstName, lastName, street, city, state, phone, email, total, deliveryDT}}) => (
    <div style={styles.userInfo}>
        <Line label="Name" value={`${firstName} ${lastName}`} />
        <Line label="Address" value={street} />
        <Line label="" value={`${city}, ${state}`} />
        <Line label="Phone" value={phone} />
        <Line label="Email" value={email} />
        <Line label="Time" value={deliveryDT} />
        <Line label="Total" value={`$${total}`} />
    </div>
)

const UserInfo_Text = ({order: {firstName, lastName, street, city, state, phone, email, total, deliveryDT}}) => (
<pre>{`
Name:    ${firstName} ${lastName}
Address: ${street}
         ${city}, ${state}
Phone:   ${phone}
Email:   ${email}
Time:    ${deliveryDT}
Total:   $${total}
`}</pre>
)

export default (props) => {
    let { id } = useParams();
    const {state, dispatch} = useContext(ShopContext);
    const order = state.admin.dict[id];

    let products = [];
    if (order && typeof order.products === 'string') {
        try {
            const prods = JSON.parse(order.products);
            products = Object.keys(prods).map(pid => ({...state.dict[pid], qty: prods[pid]}))
        
        } catch (error) {
            console.log('>>> ERROR', error);
        }
    }

    return (
        <Layout>
            <div style={styles.container}>
                <pre style={styles.notes}>PhoBalo.com</pre>
                <pre>--------------------------------------</pre>
                <pre>#{id}</pre>
                <Products_Text products={products} />
                {order && <UserInfo_Text order={order} />}
                <pre>--------------------------------------</pre>
                <pre style={styles.notes}>{`Please don't forget to reheat the\nbroth for your maximum enjoyment.\nThank you for ordering Phở at PhoBalo.com!
                `}</pre>

                {/* <h3>PhoBalo.com</h3>
                <h3>Order #{id} </h3>
                <Products products={products} />
                {order && <UserInfo order={order} />} */}

                <hr />
                <div style={{backgroundColor: '#f0f0f0', padding: '10px 10px 20px'}}>
                    <Status id={id} order={order} />
                </div>
            </div>
        </Layout>
    )
}