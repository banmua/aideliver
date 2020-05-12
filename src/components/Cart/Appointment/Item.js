import React, {useContext} from 'react';
import ShopContext, {getItemTotal} from '../../../hooks/ShopContext';
import AddIcon from '@material-ui/icons/AddCircleSharp';
import RemoveIcon from '@material-ui/icons/RemoveCircleSharp';

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '5fr 2fr 2fr',
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

export default props => {
    const {id} = props;
    const {state, dispatch} = useContext(ShopContext);

    const add = id => dispatch({type: 'ADD', payload: {id}});
    const remove = id => dispatch({type: 'REMOVE', payload: {id}});

    const product = state.dict[id];
    const {name, price, unit} = product;
    const count = state.cart[id];
    const getPrice = () => count*price;
    const unitStr = count === 1 ? unit : unit + 's';
    return (
        <div style={styles.container}>
            <div style={styles.name}>{product.name} ({id})</div>
            <div style={styles.number}>${product.price}</div>
            <div style={styles.icon}>
                <RemoveIcon color='secondary' onClick={() => remove(id)} />
            </div>
        </div>
    )
}