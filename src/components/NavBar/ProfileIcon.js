import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


export default (props) => {
    const [anchor, setAnchor] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchor(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchor(null);
      };

    const isMenuOpen = Boolean(anchor);

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu anchorEl={anchor} id={menuId} keepMounted
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
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