import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idProduct: [],
}

export const favouriteProductSlice = createSlice({
    name: 'favouriteProduct',
    initialState,
    reducers: {
        toggleFavouriteProduct: (state, action) => {
            const { idProduct } = action.payload;
            if (!Array.isArray(state.idProduct)) {
                state.idProduct = [];
            }           
            const existProduct = state.idProduct.includes(idProduct);
            if (existProduct) {
                state.idProduct = state.idProduct.filter(id => id !== idProduct);
            } else {
                state.idProduct.push(idProduct);
            }
        },
        resetFavouriteProduct: (state) => {
            state.idProduct = [];
        }
    },
})

export const { toggleFavouriteProduct, resetFavouriteProduct } = favouriteProductSlice.actions

export default favouriteProductSlice.reducer