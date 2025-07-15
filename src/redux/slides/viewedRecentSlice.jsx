import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idProduct: [],
}

export const viewedRecentSlice = createSlice({
    name: 'viewedRecent',
    initialState,
    reducers: {
        addViewed: (state, action) => {
            const { idProduct } = action.payload;
            const existProduct = state.idProduct.includes(idProduct);
            let updated;
            if (!existProduct) {
                updated = [idProduct, ...state.idProduct];
            } else {
                updated = [idProduct, ...state.idProduct.filter(item => item.id !== idProduct.id)];
            }
            state.idProduct = updated.slice(0, 20);   
        },
        clearViewed: (state) => {
            state.idProduct = [];
        }
    },
})

export const { addViewed, clearViewed } = viewedRecentSlice.actions

export default viewedRecentSlice.reducer