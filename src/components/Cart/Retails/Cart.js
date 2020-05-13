import React, {useContext} from 'react';
import Header from './Header';
import Item from './Item';
import Tax from './Tax';
import SubTotal from './SubTotal';
import Total from './Total';
import Delivery from './Delivery';
import Discount from './Discount';
import ShopContext from '../../../hooks/ShopContext';

const styles = {
    container: {
        maxWidth: '980px',
        backgroundColor: '#fafafa',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        border: '1px solid lightGray',
    }
}

export default props => {
    const {state, dispatch} = useContext(ShopContext);

    return (
        <div style={styles.container} >
            <Header />
            {Object.keys(state.cart).map(key => <Item key={key} id={key} />)}
            <Discount />
            <SubTotal />
            <Tax />
            <Delivery />
            <Total />
        </div>
    )
}