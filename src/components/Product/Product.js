import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShopContext from '../../hooks/ShopContext';

const styles ={
    name: {
        fontSize: '20px',
    },
}

const useStyles = makeStyles({
    root: {
      maxWidth: 170,
      margin: 5,
    },
    media: {
      height: 140,
    }, 
    content: {
      height: 100,
    }
  });

export default props => {
    const classes = useStyles();
    const {image, name, description, vietnamese, price, id, unit} = props;
    const {state, dispatch} = useContext(ShopContext);

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                    />
            <CardContent className={classes.content}>
                <div style={styles.name}>{name} ({id})</div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" variant='contained' color="secondary" onClick={() => dispatch({type: 'ADD', payload: {id}})}>
                Add
            </Button>
        </CardActions>
        </Card>
    );
}
