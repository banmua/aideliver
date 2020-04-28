import React from 'react';

const styles = {
    container: {
        border: '1px solid lightGray',
        margin: '0 10px 20px',
        padding: '0 20px 20px 20px',
        backgroundColor: '#fafafa',
    }
}

export default props => {
    return (
        <div style={styles.container}>
            <h2>AiDeliver.com</h2>
            <div>Delicious Vietnamese Pho and Rolls! Deliver from 10 am to 8 pm (Pacific Time). Currently serving Palo Alto, Los Altos, Mountain View, and Sunnyvale, California</div>
        </div>
    )
}