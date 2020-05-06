import React, {useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './components/App';
import Order from './components/Order';
import Admin from './components/Admin';
import Account from './components/Account';
import Cart from './components/Cart';
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
  useEffect(() => {
      const fetch = async () => {
          try {
              const tokens = await Auth.currentSession();
              const userName = tokens.getIdToken().payload['cognito:username'];
              dispatch({type: 'UPDATE', payload: {key: 'userName', value: userName, parent: 'login'}})
              console.log('>>> USER useEffect', userName);
          } catch (err) {
              console.log('error fetching orders ...', err.message, err);
          }
      }
      fetch();
  }, [])

  return (
    <Route {...rest} render={props => 
            state.login.userName 
              ? (<Component {...props} />) 
              : (<Redirect to={{pathname: "/user", state: { from: props.location }}}/>)}
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ShopContextProvider>
        {window.location.hostname === 'admin.phobalo.com' || window.location.pathname === '/admin'
            ? <Admin />
            : <Order />
        }
      </ShopContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <ShopContextProvider>
//       <Router>
//         <Switch>
//           <Route exact path="/"><Order/></Route>
//           <Route path="/user"><Account /></Route>
//           <PrivateRoute path="/admin" component={<Admin />} />
//           <Route path="/cart"><Cart /></Route>
//         </Switch>
//       </Router>
//     </ShopContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

serviceWorker.unregister();
