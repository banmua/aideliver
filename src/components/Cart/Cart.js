import React, {useContext} from 'react';
import Header from './Header';
import Item from './Item';
import Tax from './Tax';
import Total from './Total';
import ShopContext from '../../hooks/ShopContext';

const styles = {
    container: {
        backgroundColor: '#fafafa'
    }
}

export default props => {
    const {state, dispatch} = useContext(ShopContext);

    return (
        <div style={styles.container} >
            <Header />
            {Object.keys(state.cart).map(key => <Item id={key} />)}
            <Tax />
            <Total />
        </div>
    )
}