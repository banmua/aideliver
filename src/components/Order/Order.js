import React, {useContext} from 'react';
import Banner from '../Banner';
import ProductList from '../Product/ProductList';
import Cart from '../Cart/Retails/Cart';
import UserInfo from '../UserInfo';
import SubmitButton from '../SubmitButton';
import ShopContext from '../../hooks/ShopContext';

export default props => {
  const {state, dispatch} = useContext(ShopContext);
  return (
      <div >
        <a name='top'/>
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
