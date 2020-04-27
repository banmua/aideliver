import React from 'react';
import Item from './Item';

const styles = {
    container: {
        backgroundColor: '#fafafa'
    }
}

export default props => {
    return (
        <div style={styles.container} >
            <Item />
            <Item />
        </div>
    )
}