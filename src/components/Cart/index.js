import React from 'react';

import importCart from './Cart';
import importCartAndSubmit from './CartAndSubmit';

// export const Cart = props => <h2>Cart</h2>
// export const CartAndSubmit = props => <h2>CartAndSubmit</h2>


export const Cart = importCart;
export const CartAndSubmit = importCartAndSubmit;

export default {
  Cart,
  CartAndSubmit,
}