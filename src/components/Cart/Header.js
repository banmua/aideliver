import React, {useContext} from 'react';
import ShopContext, {getItemTotal} from '../../hooks/ShopContext';


const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr 2fr 2fr 2fr',
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
            <div style={styles.bold}>Id</div>
            <div style={styles.bold}>Product</div>
            <div style={{...styles.bold, ...styles.number}}>Price</div>
            <div style={{...styles.bold, ...styles.number}}>Units</div>
            <div style={{...styles.bold, ...styles.number}}>Sub</div>
        </div>
    )
}