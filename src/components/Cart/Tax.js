import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';


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

    const getTax = () => (0.08 * Object.keys(cart).reduce( (sum, id) => sum + dict[id].price * cart[id], 0)).toFixed(2); 

    return (
        <div style={styles.container}>
            <div style={styles.right}>Tax:</div>
            <div style={styles.right}>${getTax()}</div>
        </div>
    )
}