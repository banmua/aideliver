import React, {useContext} from 'react';
import ShopContext, {getItemTotal} from '../../hooks/ShopContext';


const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr 2fr 2fr 2fr',
        padding: '5px 0',
        borderBottom: '1px solid #ddd',
        fontSize: '14px',
    },

    number: {
        justifySelf: 'end',
    }
}

export default props => {
    const {id} = props;
    const {state, dispatch} = useContext(ShopContext);

    const product = state.dict[id];
    const {name, price, unit} = product;
    const count = state.cart[id];
    const getPrice = () => count*price;
    const unitStr = count === 1 ? unit : unit + 's';
    return (
        <div style={styles.container}>
            <div>{product.id} </div>
            <div>{product.name}</div>
            <div style={styles.number}>${product.price}</div>
            <div style={styles.number}>{count} {unitStr}</div>
            <div style={styles.number}>${getItemTotal(state, id)}</div>
        </div>
    )
}