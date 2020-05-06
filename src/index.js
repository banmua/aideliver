import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './components/App';
import Order from './components/Order';
import Admin from './components/Admin';
import Cart from './components/Cart';
import {ShopContextProvider} from './hooks/ShopContext';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <ShopContextProvider>
      {window.location.pathname === '/admin' 
          ? <Admin />
          : <Order />
      }
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <ShopContextProvider>
//       <Router>
//         <Switch>
//           <Route exact path="/"><Order/></Route>
//           <Route path="/admin"><Admin /></Route>
//           <Route path="/cart"><Cart /></Route>
//         </Switch>
//       </Router>
//     </ShopContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

serviceWorker.unregister();
