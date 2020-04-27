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
    },

    bold: {
        fontWeight: 'bold',
        fontSize: '16px'
    }
}

export default props => {
    return (
        <div style={styles.container}>
            <div style={styles.bold}>Unit</div>
            <div style={styles.bold}>Product</div>
            <div style={{...styles.bold, ...styles.number}}>Unit Price</div>
            <div style={{...styles.bold, ...styles.number}}>Units</div>
            <div style={{...styles.bold, ...styles.number}}>Price</div>
        </div>
    )
}