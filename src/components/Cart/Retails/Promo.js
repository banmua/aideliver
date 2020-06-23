import React, {useContext} from 'react';
import ShopContext, {getPromo} from '../../../hooks/ShopContext';


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
    const {promos = {}} = state.payment;
    const keys = Object.keys(promos);
    const {referrer: rawReferrer = ''} = state.userInfo;

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
                            <div style={styles.right}>{`- $${getPromo(pro)(state)}`}</div>
                        </div>
                    )
                })
            }
        </>
    )
}