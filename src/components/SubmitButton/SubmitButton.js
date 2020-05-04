import React from 'react';
import Button from '@material-ui/core/Button';

export default ({style}) => {
    return (
        <form action="mailto:phobalo72@gmail.com?cc=bar@example.com&subject=Order%20#123&body=Content" method="post" enctype="text/plain">
        <Button variant="contained" type="submit" color="secondary" style={style}>Submit Your Order</Button>
        </form>
    )
}