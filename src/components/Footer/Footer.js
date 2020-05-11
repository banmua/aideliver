import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';

const styles = {
    container: {
        width: '100%', 
        marginTop: '20px', 
        marginBottom: '10px',
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
            <hr/>
            <div style={styles.line}>{state.footer.line}</div>
        </div>
    )
}