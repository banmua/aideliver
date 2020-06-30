import { configureStore } from '@reduxjs/toolkit';
import shop from './slices/shop';

export default configureStore({
  reducer: {
    shop: shop.reducer,
  },
});
