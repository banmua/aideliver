import React from 'react';
import {connect} from 'react-redux';
import {getTotal} from '../../../redux/slices/shop';

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '5fr 2fr 2fr',
        padding: '5px 0',
        whiteSpace: 'nowrap'
    },

    right: {
        justifySelf: 'end',
        color: 'red',
        fontWeight: 'bold',
        fontSize: '16px',
    }
}

const Total = ({shop}) => {
    return (
        <div style={styles.container}>
            <div style={styles.right}>Total:</div>
            <div style={styles.right}>${getTotal(shop)}</div>
        </div>
    )
}

export default connect(state => ({shop: state.shop}))(Total)