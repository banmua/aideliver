import React from 'react';

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '5fr 1fr 1fr 3fr',
    }
}

export default props => {
    return (
        <div style={styles.container}>
            <div>Product name</div>
            <div>$12.00</div>
            <div>2</div>
            <div>$24.00</div>
        </div>
    )
}