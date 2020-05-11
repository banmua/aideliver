import React, {useContext} from 'react';
import ShopContext, {getTax} from '../../../hooks/ShopContext';


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

    return (
        <div style={styles.container}>
            <div style={styles.right}>Tax:</div>
            <div style={styles.right}>${getTax(state)}</div>
        </div>
    )
}