import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import ShopContext from '../../hooks/ShopContext';

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
        width: '200px',
        height: '150px'
    },
    
    name: {
        fontSize: '24px',
    },
    button: {
        marginTop: '5px'
    }
}

export default props => {
    const {image, name, description, price, id, unit} = props;
    const {state, dispatch} = useContext(ShopContext);

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}><img src={image} style={styles.image} /></div>
            <div>
                <div style={styles.name}>{name}</div>
                <div>${price} / {unit}</div>
                <div style={styles.button}> 
                    <Button variant="contained" color="secondary" 
                            onClick={() => dispatch({type: 'ADD', payload: {id}})}
                    >Add</Button>
                </div>
            </div>
        </div>
    )
}