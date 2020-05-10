import React from 'react';
import Banner from '../Banner';
import ProductList from '../Product/ProductList';
import Cart from '../Cart';
import UserInfo from '../UserInfo';
import SubmitButton from '../SubmitButton';

export default props => {
  return (
      <div style={{margin: '0 10px'}}>
        <Banner />
        <ProductList />
        <div><a name='order'/><h2>Your order:</h2></div>
        <Cart />
        <div><h2>Showing Requests:</h2></div>
        <UserInfo />
        <SubmitButton style={{margin: '20px 20px'}} />
      </div>
  )
}
