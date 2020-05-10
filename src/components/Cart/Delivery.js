import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';


const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '5fr 2fr 2fr',
        padding: '5px 0',
        whiteSpace: 'nowrap'
    },

    right: {
        justifySelf: 'end',
        fontWeight: 'bold',
        fontSize: '16px',
    }
}

export default props => {
    const {state, dispatch} = useContext(ShopContext);

    const {cart, dict} = state;

    const getDelivery = () => state.deliveryFee.toFixed(2); 

    return (
        <div style={styles.container}>
            <div style={styles.right}>Delivery:</div>
            <div style={styles.right}>${getDelivery()}</div>
        </div>
    )
}