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
        width: '300px'
    }
}

export default props => {
    return (
        <div style={styles.container}>
            <div>Name</div>
            <div style={styles.label}><input type='text' style={styles.input}></input></div>
            
            <div>Street</div>
            <div><input type='text' style={styles.input}></input></div>

            <div>City</div>
            <div><input type='text' style={styles.input}></input></div>

            <div>Phone</div>
            <div><input type='text' style={styles.input}></input></div>

            <div>Email</div>
            <div><input type='text' style={styles.input}></input></div>
        </div>
    )
}