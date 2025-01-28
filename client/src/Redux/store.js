import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice';
import ProductSlice from './slices/productSlice';
import AuthSlice from './slices/authSlice'



export const store = () => configureStore({
    reducer: {
        cart: CartSlice,
        product: ProductSlice,
        auth: AuthSlice
    }
});
