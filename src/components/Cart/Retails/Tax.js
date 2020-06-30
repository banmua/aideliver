import React from 'react';
import {connect} from 'react-redux';
import {getTax} from '../../../redux/slices/shop';

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

const Tax = ({shop}) => {
    return (
        <div style={styles.container}>
            <div style={styles.right}>Tax:</div>
            <div style={styles.right}>${getTax(shop)}</div>
        </div>
    )
}

export default connect(state => ({shop: state.shop}))(Tax)
