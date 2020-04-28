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
            <h2>PhoBalo.com</h2>
            <div><em>Delicious Vietnamese Pho and Rolls!</em> Deliver from 10 am to 8 pm (PST). Currently serving Palo Alto, Los Altos, Mountain View, and Sunnyvale, California</div>
        </div>
    )
}