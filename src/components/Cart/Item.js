import React, {useContext} from 'react';
import ShopContext, {getItemTotal} from '../../hooks/ShopContext';


const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '2fr 4fr 1fr 1fr 1fr 2fr',
        padding: '5px 0'
    },

    number: {
        justifySelf: 'end',
    }
}

export default props => {
    const {id} = props;
    const {state, dispatch} = useContext(ShopContext);

    const product = state.dict[id];
    const {name, price} = product;
    const count = state.cart[id];
    const getPrice = () => count*price;
    return (
        <div style={styles.container}>
            <div>{product.id} </div>
            <div>{product.name}</div>
            <div style={styles.number}>${product.price}</div>
            <div style={styles.number}>{count}</div>
            <div style={styles.number}>${getItemTotal(state, id)}</div>
        </div>
    )
}