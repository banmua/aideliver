import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShopContext from '../../hooks/ShopContext';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles ={
    name: {
        fontSize: '20px',
    },
    input: {
        width: '110px'
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 160,
        margin: 5,
    },
    media: {
        height: 140,
    }, 
    content: {
        height: 110,
    },
    formControl: {
        //margin: theme.spacing(1),
        marginTop: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
  }));

export default props => {
    const [choice, setChoice] = useState('');
    const classes = useStyles();
    const {image, name, description, native, price, id, unit, choices} = props;
    const {state, dispatch} = useContext(ShopContext);

    const isGroup = choices && choices.length > 0;
    const handleChange = () => {};

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                    className={classes.media}
                    image={image}
                    title="Product"
                    />
            <CardContent className={classes.content}>
                <div style={styles.name}>{name}</div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}<br/>
                    ${price} / {unit}<br/>
                </Typography>
                {isGroup
                    ?   (
                            <FormControl className={classes.formControl}>
                                <Select labelId={`choices-${id}`} id={`choices-${id}`} value={choice} displayEmpty 
                                        renderValue={value => !value ? <div><em>Choices</em></div> : <div>{state.dict[value].name}</div>}
                                        onChange={event => setChoice(event.target.value)}>
                                <MenuItem value={""}><em>Choices</em></MenuItem>
                                    {choices.map(id => 
                                        <MenuItem value={`${id}`}>
                                            {state.dict[id].name} {state.dict[id].isNameNative && <i>&nbsp;({state.dict[id].description})</i>}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        )
                    : null
                }
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" variant='contained' color="secondary" onClick={() => {
                if (choices && !choice) alert(`Please select a choice of ${state.dict[id].name}`)
                else dispatch({type: 'ADD', payload: {id: choices ? choice : id}})
                //window.location.href = '#order';
            }}
            >Add</Button>
        </CardActions>
        </Card>
    );
}
