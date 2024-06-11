import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from '../data/Products';

const initialState = {
    products: PRODUCTS,
    selectedProducts: [],
    filteredProducts: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedProduct(state, action) {
            state.selectedProducts = action.payload;
        },
        toggleFavorite(state, action) {
            const productId = action.payload;
            if (state.favorites.includes(productId)) {
                state.favorites = state.favorites.filter(id => id !== productId);
            } else {
                state.favorites.push(productId);
            }
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }


    }
});

export const { setSelectedProduct, toggleFavorite } = productSlice.actions;
export default productSlice.reducer;