import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';

const styles = {
    container: {
        //width: '100%', 
        margin: '20px 10px 20px',
        fontSize: '10px',
    },
    line: {
        display: 'flex',
        justifyContent: 'center'
    }
}

export default () => {
    const {state, dispatch} = useContext(ShopContext);

    return (
        <div style={styles.container}>
            
            <h2>Contact Info:</h2>
        </div>
    )
}