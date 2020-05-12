import React, {useContext} from 'react';
import ShopContext, {getItemTotal} from '../../../hooks/ShopContext';


const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '5fr 2fr 2fr',
        padding: '5px 0',
        borderBottom: '1px solid #ddd',
    },

    number: {
        justifySelf: 'end',
    },

    bold: {
        fontWeight: 'bold',
        fontSize: '16px'
    }
}

export default props => {
    return (
        <div style={styles.container}>
            <div style={styles.bold}>Product</div>
            <div style={{...styles.bold, ...styles.number}}>Price</div>
        </div>
    )
}