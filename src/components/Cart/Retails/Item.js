import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {add, remove, getItemTotal} from '../../../redux/slices/shop';
import ShopContext  from '../../../hooks/ShopContext';
import AddIcon from '@material-ui/icons/AddCircleSharp';
import RemoveIcon from '@material-ui/icons/RemoveCircleSharp';

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr 1fr 2fr 2fr',
        padding: '5px 0',
        borderBottom: '1px solid #ddd',
        fontSize: '14px',
    },

    name: {
        padding: '3px',
    },

    number: {
        padding: '3px',
        justifySelf: 'end',
    },

    icon: {
        justifySelf: 'end',
    },
}

const Item = props => {
    const {id, add, remove, shop} = props;
    const {state, dispatch} = useContext(ShopContext);

    const addItem = id => dispatch({type: 'ADD', payload: {id}});
    const removeItem = id => dispatch({type: 'REMOVE', payload: {id}});

    const product = shop.dict[id];
    const {name, price, unit} = product;
    const count = shop.cart[id];
    const getPrice = () => count*price;
    const unitStr = count === 1 ? unit : unit + 's';
    return (
        <div style={styles.container}>
            <div style={styles.name}>{product.name} ({id})</div>
            <div style={styles.number}>${product.price}</div>
            <div style={styles.number}>{count}</div>
            <div style={styles.number}>${getItemTotal(shop, id)}</div>
            <div style={styles.icon}>
                <AddIcon color='secondary' onClick={() => {add({id})}} />
                <RemoveIcon color='secondary' onClick={() => {remove({id})}} />
            </div>
        </div>
    )
}

export default connect(state => ({shop: state.shop}), {add, remove})(Item);