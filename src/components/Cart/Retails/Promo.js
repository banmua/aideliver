import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {getPromo} from '../../../redux/slices/shop';

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

const Promo = ({shop}) => {
    const {promos = {}} = shop.payment;
    const keys = Object.keys(promos);
    const {referrer: rawReferrer = ''} = shop.userInfo;

    const referrer = rawReferrer.trim().toLowerCase();

    if (keys.length === 0 || !keys.includes(referrer)) return null;

    return (
        <>
            {keys.filter(key => referrer && key.toLowerCase() === referrer.toLowerCase())
                .map(key => {
                    const pro = promos[key];
                    const str = pro.type === 'percent' ? ` (${pro.value}${pro.unitPostfix})` : '';
                    return (
                        <div style={styles.container}>
                            <div style={styles.right}>{`${pro.name}${str}:`}</div>
                            <div style={styles.right}>{`- $${getPromo(pro)(shop)}`}</div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default connect(state => ({shop: state.shop}))(Promo)