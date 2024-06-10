import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import productReducer from './productSlice';
import basketReducer from './basketSlice';
import authReducer from './authSlice';


const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer,
        auth: authReducer
    }
})

export default store;