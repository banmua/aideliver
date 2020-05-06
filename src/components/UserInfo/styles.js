import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  }));

export default {
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
    },
    text: {
        width: '340px',
    },
    textError: {
        width: '340px',
        color: 'red',
    },
    city: {
        width: '340px',
        marginTop: '15px',
    },
}