import React, {useContext} from 'react';
import ShopContext, {getDiscount} from '../../hooks/ShopContext';


const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '5fr 2fr 2fr',
        padding: '5px 0'
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

    if (state.payment.discounts.length === 0) return null;

    return (
        <>
            {Object.keys(state.payment.discounts).map(key => {
                const dis = state.payment.discounts[key];
                return (
                    <div style={styles.container}>
                        <div style={styles.right}>{`${dis.name} (${dis.value}${dis.unitPostfix}):`}</div>
                        <div style={styles.right}>{`- $${getDiscount(dis)(state)}`}</div>
                    </div>
                )
            })}
        </>
    )
}