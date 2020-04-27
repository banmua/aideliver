import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Banner from './components/Banner';
import ProductList from './components/Product/ProductList';
import Cart from './components/Cart';
import Address from './components/Address';
import SubmitButton from './components/SubmitButton';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Banner />
    <ProductList />
    <div><h2>Your order:</h2></div>
    <Cart />
    <div><h2>Your address:</h2></div>
    <Address />
    <SubmitButton style={{marginTop: '20px'}} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
