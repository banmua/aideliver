import React from 'react';

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '100px auto',
        rowGap: '10px',
    },
    label: {
        //justifySelf: 'end',
    },
    input: {
        width: '250px'
    }
}

export default props => {
    return (
        <div style={styles.container}>
            <div>Date</div>
            <div><input type='text' style={styles.input}></input></div>

            <div>Time</div>
            <div><input type='text' style={styles.input}></input></div>
        </div>
    )
}