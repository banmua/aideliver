import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';
import Product from './Product';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        //display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }
}

export default props => {
    const {state, dispatch} = useContext(ShopContext); 

    return (
        <div style={styles.container}>
            {state.products.map(prod => <Product {...prod} />) }
        </div>
    )
}