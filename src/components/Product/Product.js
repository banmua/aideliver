import React from 'react';

const styles ={
    container: {
        margin: '10px',
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
            <img src={image} style={styles.image} />
            <div>
                <div style={styles.name}>{name}</div>
                <div>{description}</div>
                <div>${price}</div>
            </div>
        </div>
    )
}