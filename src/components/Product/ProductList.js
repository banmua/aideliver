import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';
import Product from './Product';

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }
}

export default props => {
    const {products} = useContext(ShopContext); 

    return (
        <div style={styles.container}>
            {products.map(prod => <Product {...prod} />) }
        </div>
    )
}