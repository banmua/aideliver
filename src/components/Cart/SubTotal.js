import React, {useContext} from 'react';
import ShopContext, {getSubTotal} from '../../hooks/ShopContext';


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
    return (
        <div style={styles.container}>
            <div style={styles.right}>Subtotal:</div>
            <div style={styles.right}>${getSubTotal(state)}</div>
        </div>
    )
}