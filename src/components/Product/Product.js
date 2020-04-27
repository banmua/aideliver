import React from 'react';
import Button from '@material-ui/core/Button';

const styles ={
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        columnGap: '10px',
        margin: '10px',
    },
    imageContainer: {
        justifySelf: 'end',
    },
    image: {
        width: '150px'
    },
    name: {
        fontSize: '24px',
    },
    button: {
        marginTop: '5px'
    }
}

export default props => {
    const {image, name, description, price} = props;
    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}><img src={image} style={styles.image} /></div>
            <div>
                <div style={styles.name}>{name}</div>
                <div>${price}</div>
                <div style={styles.button}> <Button variant="contained" color="secondary" >Add</Button></div>
            </div>
        </div>
    )
}