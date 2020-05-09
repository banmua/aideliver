import React from 'react';

export const withCenter = (Comp) => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',

        }
    }
    return (props) => (
        <div style={styles.container}>
            <Comp {...props} />
        </div>
    )
}