import React from 'react';
import {connect} from 'react-redux';

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
    },
    notes: {
        justifySelf: 'start',
        paddingLeft: '7px',
    }

}

const Delivery = ({shop}) => {
    const getDelivery = () => shop.deliveryFee.toFixed(2);
    const referrer = shop.userInfo.referrer.trim().toLowerCase();
    const isFreeShipping = shop.freeShipping.includes(referrer);
    const str = isFreeShipping ? '0.00' : String(getDelivery());
    return (
        <div style={styles.container}>
            <div style={styles.right}>Delivery:</div>
            <div style={styles.right}>${str}</div>
            <div style={styles.notes}>{isFreeShipping && '(free)'}</div>
        </div>
    )
}

export default connect(state => ({shop: state.shop}))(Delivery)