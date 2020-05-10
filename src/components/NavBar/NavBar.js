import React, {useContext, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShopContext, {getNumOfItems} from '../../hooks/ShopContext';
import {Redirect} from 'react-router-dom';
import Link from '../Link';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AppsIcon from '@material-ui/icons/Apps';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HomeIcon from '@material-ui/icons/Home';
import {useStyles} from './styles';
import ProfileIcon from './ProfileIcon';
import history from '../history';

export default (props) => {
  const classes = useStyles();
  const {state, dispatch} = useContext(ShopContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}

      <MenuItem  onClick={() => window.location.href='#order'}>
        <IconButton aria-label="show notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Shopping Cart</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton}
                    color="inherit" aria-label="open drawer"
                    onClick={() => setIsDrawerOpen(true)}
                  >
              <MenuIcon />
            </IconButton>
            <Drawer anchor={'left'} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
              <List>
                <ListItem button onClick={() => setIsDrawerOpen(false)}>
                    <Link to="/catalog" ><ListItemIcon><AppsIcon /></ListItemIcon></Link>
                    <Link to="/catalog" ><ListItemText primary="Product Catalog" /></Link>
                </ListItem>

                <ListItem button onClick={() => setIsDrawerOpen(false)}>
                    <Link to="/cart" ><ListItemIcon><ShoppingCartIcon /></ListItemIcon></Link>
                    <Link to="/cart" ><ListItemText primary="Shopping Cart" /></Link>
                </ListItem>

                <ListItem button onClick={() => setIsDrawerOpen(false)}>
                  <Link to="/about" ><ListItemIcon><LocalShippingIcon /></ListItemIcon></Link>
                  <Link to="/about" ><ListItemText primary="About Us" /></Link>
                </ListItem>

                {/* <ListItem button onClick={() => window.location.pathname = '/contact'}>
                    <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
                    <ListItemText primary="Contact Info" />
                </ListItem> */}
              </List>
            </Drawer>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" color="white">{state.entity.name}</Link>
          </Typography>

          {window.innerWidth < 450 ? null : 
                <div className={classes.search}>
                  <div className={classes.searchIcon}><SearchIcon /></div>
                  <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }} />
                </div>}

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            {window.innerWidth > 450 ? null :
                <IconButton aria-label="search icon" color="inherit">
                    <SearchIcon />
                </IconButton> 
            }

            <IconButton aria-label="show 17 new notifications" color="inherit"  
                  onClick={() => window.location.pathname === '/' 
                      ? window.location.href='#order' 
                      : window.location.pathname = '/cart'}>
              <Badge badgeContent={getNumOfItems(state)} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <ProfileIcon />
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}