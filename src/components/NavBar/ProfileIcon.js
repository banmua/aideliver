import React, {useState, useContext, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShopContext, {isAdmin} from '../../hooks/ShopContext';
import {Auth} from 'aws-amplify';
import {Link} from 'react-router-dom';


export default (props) => {
    const {state, dispatch} = useContext(ShopContext);
    const [anchor, setAnchor] = useState(null);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const tokens = await Auth.currentSession();
                const userName = tokens.getIdToken().payload['cognito:username'];
                dispatch({type: 'UPDATE', payload: {key: 'userName', value: userName, parent: 'login'}})
                setUserName(userName);

            } catch (err) {
                console.log('>>> ERROR fetching user', err.message, err);
            }
        }
        fetch();
    }, [userName])
    
    const handleMenuOpen = (event) => {
        setAnchor(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchor(null);
    };

    const handleSignOut = async () => {
        handleMenuClose();
        try { 
            await Auth.signOut();
            dispatch({type: 'UPDATE', payload: {key: 'userName', value: null, parent: 'login'}})
            setUserName(null);
            window.location.pathname = '/';
        
        } catch (error) { console.log('error signing out: ', error)}
    }

    const isMenuOpen = Boolean(anchor);

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu anchorEl={anchor} id={menuId} keepMounted
          anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
          //transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
            {state.login.userName 
                ?   <div>
                        <MenuItem onClick={() => window.location.pathname = '/profile'}>Account</MenuItem>
                        {isAdmin(state) && <MenuItem onClick={() => window.location.pathname = '/admin'}>Admin</MenuItem>}
                        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
                    </div>
                :   <MenuItem><Link to="/admin" style={{textDecoration: 'none', color: 'black'}}>Sign in</Link></MenuItem>  
                }
        </Menu>
      );
    
    return (
        <>
            <IconButton edge="end" aria-label="account of current user" aria-controls={menuId}
                        aria-haspopup="true" color="inherit"
                        onClick={handleMenuOpen}
                    >
                <AccountCircle />
            </IconButton>
            {renderMenu}
        </>
    )
}