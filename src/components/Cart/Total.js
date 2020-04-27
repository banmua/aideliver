import React, {useContext} from 'react';
import ShopContext, {getTotal} from '../../hooks/ShopContext';


const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '7fr 2fr 2fr',
        padding: '5px 0'
    },

    right: {
        justifySelf: 'end',
        color: 'red',
        fontWeight: 'bold',
        fontSize: '16px',
    }
}

export default props => {
    const {state, dispatch} = useContext(ShopContext);
    return (
        <div style={styles.container}>
            <div style={styles.right}>Total:</div>
            <div style={styles.right}>${getTotal(state)}</div>
        </div>
    )
}