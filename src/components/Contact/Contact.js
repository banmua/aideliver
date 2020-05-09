import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';

const styles = {
    container: {
        width: '100%', 
        marginTop: '20px', 
        marginBottom: '10px',
        fontSize: '10px',
    }
}

export default () => {
    const {state, dispatch} = useContext(ShopContext);

    return (
        <div style={styles.container}>
            <hr/>
            <div>{state.footer.line}</div>
        </div>
    )
}