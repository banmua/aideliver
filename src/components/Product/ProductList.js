import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';
import Product from './Product';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

export default props => {
    const {state, dispatch} = useContext(ShopContext); 

    return (
        <div style={styles.container}>
            {state.menu.map(id => <Product key={`product-${id}`} {...state.dict[id]} />)}
        </div>
    )
}