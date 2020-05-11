import React, {useContext} from 'react';
import Banner from '../Banner';
import ProductList from '../Product/ProductList';
import Cart from '../Cart';
import UserInfo from '../UserInfo';
import SubmitButton from '../SubmitButton';
import ShopContext from '../../hooks/ShopContext';

export default props => {
  const {state, dispatch} = useContext(ShopContext);
  return (
      <div style={{margin: '0 10px'}}>
        <Banner />
        <ProductList />
        <div><a name='order'/><h2>{state.content.cartHeading}:</h2></div>
        <Cart />
        <div><h2>{state.content.userInfoHeading}</h2></div>
        <UserInfo />
        <SubmitButton style={{margin: '20px 20px'}} />
      </div>
  )
}
