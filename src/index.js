import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './components/App';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Order from './components/Order';
import Admin from './components/Admin';
import Profile from './components/Profile';
import Account from './components/Account';
import Contact from './components/Contact';
import {CartAndSubmit} from './components/Cart';
import ProductList from './components/Product/ProductList';
import {ShopContextProvider} from './hooks/ShopContext';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ShopContext from './hooks/ShopContext';
import {Redirect} from 'react-router-dom';
import { Auth} from 'aws-amplify';

Amplify.configure(config);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {state, dispatch} = useContext(ShopContext);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
      const fetch = async () => {
          try {
              const tokens = await Auth.currentSession();
              const userName = tokens.getIdToken().payload['cognito:username'];
              dispatch({type: 'UPDATE', payload: {key: 'userName', value: userName, parent: 'login'}});
              setUserName(userName);

          } catch (err) {
              console.log('>>> ERROR fetching user', err.message, err);
          }
      }
      fetch();
  }, [userName]);

  return (
    <Route {...rest} render={props => 
            userName
              ? (<Component {...props} />) 
              : (<Redirect to={{pathname: "/user", state: { from: props.location }}}/>)}
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ShopContextProvider>
      <Router>
        <Switch>
          {/* <PrivateRoute path="/admin" component={<Admin />} /> */}
          <Route path="/user"><Account /></Route>
          <Route path="/admin"><Layout><Admin /></Layout></Route>
          <Route path="/profile"><Layout><Profile /></Layout></Route>
          <Route path="/contact"><Layout><Contact /></Layout></Route>
          <Route path="/about"><Layout><h2>About Us:</h2></Layout></Route>
          <Route path="/catalog"><Layout><ProductList /></Layout></Route>
          <Route path="/cart"><Layout><CartAndSubmit /></Layout></Route>
          <Route path="/"><Layout><Order /></Layout></Route>
        </Switch>
      </Router>
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
