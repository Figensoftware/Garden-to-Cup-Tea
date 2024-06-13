import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from '../data/Products';

const initialState = {
    products: PRODUCTS,
    selectedProducts: [],
    filteredProducts: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    loading: false,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedProduct(state, action) {
            state.selectedProducts = action.payload;
        },
        searchProducts(state, action) {
            const query = action.payload.toLowerCase();
            if (query.trim() === "") {
                state.filteredProducts = state.products;
            } else {
                state.filteredProducts = state.products.filter((product) =>
                    product.title.toLowerCase().includes(query));
            }
        },
        toggleFavorite(state, action) {
            const productId = action.payload;
            if (state.favorites.includes(productId)) {
                state.favorites = state.favorites.filter(id => id !== productId);
            } else {
                state.favorites.push(productId);
            }
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        setLoading(state, action) {
            state.loading = action.payload;
        }


    }
});

export const { setSelectedProduct, searchProducts, toggleFavorite, setLoading } = productSlice.actions;
export default productSlice.reducer;