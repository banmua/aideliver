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
            <div>
                <input list="cities" name="browser" style={styles.input}/>
                <datalist id="cities">
                    <option value="Palo Alto, CA" />
                    <option value="Los Altos, CA" />
                    <option value="MountainView, CA" />
                    <option value="Sunnyvale, CA" />
                </datalist>
            </div>

            <div>Phone</div>
            <div><input type='text' style={styles.input}></input></div>

            <div>Email</div>
            <div><input type='text' style={styles.input}></input></div>

            <div>Delivery Date</div>
            <div><input type='text' style={styles.input}></input></div>

            <div>Deliver Time</div>
            <div><input type='text' style={styles.input}></input></div>
        </div>
    )
}