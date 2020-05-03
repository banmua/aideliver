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
      width: 190,
      margin: 5,
    },
    media: {
      height: 140,
    }, 
    content: {
      height: 110,
    }
  });

export default props => {
    const classes = useStyles();
    const {image, name, description, vietnamese, price, id, unit, choices} = props;
    const {state, dispatch} = useContext(ShopContext);

    const isGroup = choices && choices.length > 0;

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                    />
            <CardContent className={classes.content}>
                <div style={styles.name}>{name} {isGroup ? '' : `(${id})`}</div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}<br/>
                    ${price} / {unit}<br/>
                    {isGroup
                        ?   (<div>
                                <input list={`choices-${id}`} name="browser" style={styles.input}/>
                                <datalist id={`choices-${id}`}>
                                    {choices.map(id => <option>{state.dict[id].name} ({state.dict[id].id})</option>)}
                                </datalist>
                                </div>
                            )
                        : null
                    }
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" variant='contained' color="secondary" onClick={() => {
                dispatch({type: 'ADD', payload: {id}});
                window.location.href = '#order';
            }}
            >Add</Button>
        </CardActions>
        </Card>
    );
}
