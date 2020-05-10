import React, {useContext} from 'react';
import ShopContext from '../../hooks/ShopContext';
import {Link} from 'react-router-dom';

export default props => {
    const {state, dispatch} = useContext(ShopContext);
    const isSignedIn = !!state.login.userName;

    if (!isSignedIn) 
       // return <h2>Please <Link to="/user">sign in</Link>.</h2>
       return <h2>Please sign in.</h2>

    return (
        <h2>{state.login.userName}</h2>
    )
}