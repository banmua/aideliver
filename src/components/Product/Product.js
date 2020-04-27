import React from 'react';

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
            </div>
        </div>
    )
}