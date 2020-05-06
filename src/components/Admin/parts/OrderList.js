import React from 'react';

const DisplayOrder = ({order, i})=> {
    return (
        <div style={{padding: '20px', backgroundColor: i%2 === 0 ? '#dedede' : 'white'}}>
            <pre>{JSON.stringify(order, null, 2)}</pre>
        </div>
    )
}

export default ({orders, state}) => {

    

    const getOrder = order => {
        const {id, products, user, address, phone, email, total} = order;
        const cart = JSON.parse(products);
        const list = Object.keys(cart).map(key => {
            const prod = state.dict[key];
            return {
                id: prod.id,
                name: prod.name,
                price: prod.price,
                qty: cart[key]
            }
        })
        return {
            id,
            user,
            address,
            phone,
            email,
            total,
            products: list
        }
    }

    console.log('>>> ORDERS', orders && orders.data.listOrders.items, state);

    //return <pre>{JSON.stringify(orders, null, 2)}</pre>


    const arr = orders && orders.data.listOrders.items.map(order => getOrder(order));

    

    return (
        <div>
            {arr && arr.map( (order,i) => <DisplayOrder order={order} i={i} />)}
        </div>
    );
}