import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import Banner from './components/Banner';
import ProductList from './components/Product/ProductList';
import Cart from './components/Cart';
import Address from './components/Address';
import Delivery from './components/Delivery';
import SubmitButton from './components/SubmitButton';
import ShopContext, {ShopContextProvider} from './hooks/ShopContext';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <ShopContextProvider>
      {/* <App /> */}
      <Banner />
      <ProductList />
      <div><h2>Your order:</h2></div>
      <Cart />
      <div><h2>Your info:</h2></div>
      <Address />
      <div><h2>Delivery:</h2></div>
      <Delivery />
      <SubmitButton style={{marginTop: '20px'}} />
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
