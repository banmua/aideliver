import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
//import App from './App';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ProductList from './components/Product/ProductList';
import Cart from './components/Cart';
import UserInfo from './components/UserInfo';
import Delivery from './components/Delivery';
import SubmitButton from './components/SubmitButton';
import ShopContext, {ShopContextProvider} from './hooks/ShopContext';
import Admin from './components/Admin';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <ShopContextProvider>
      {/* <App />  */}
      <NavBar />
      <div style={{margin: '0 10px'}}>
      <Banner />
      <ProductList />
      <div><a name='order'/><h2>Your order:</h2></div>
      <Cart />
      <div><h2>Your info:</h2></div>
      <UserInfo />
      <SubmitButton style={{margin: '20px 20px'}} />
      </div>
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
