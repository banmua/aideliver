import React from 'react';

const styles = {
    container: {
        border: '2px solid gray',
        margin: '0 10px 20px',
        padding: '0 20px 20px 20px',
    }
}

export default props => {
    return (
        <div style={styles.container}>
            <h2>AiDeliver.com</h2>
            <div>Place orders and we deliver the next day between 2pm to 4pm</div>
            <div>Currently serving Palo Alto, Los Altos, Mountain View, and Sunnyvale, California</div>
        </div>
    )
}