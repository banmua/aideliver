import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';

const styles = {
    container: {
        //border: '1px solid lightGray',
        //margin: '0 10px 20px',
        padding: '0px 20px 20px 20px',
        //backgroundColor: '#fafafa',
    }
}

export default props => {
    const {state, dispatch} = useContext(ShopContext);

    return (
        <div style={styles.container}>
            <div dangerouslySetInnerHTML={{__html: state.banner.line}} />
        </div>
    )
}