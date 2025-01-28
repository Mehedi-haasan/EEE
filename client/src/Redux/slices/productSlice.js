import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "Mehedi" }
];

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload); // Append the new product
        },
        deleteCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id); // Remove product by id
        }
    }
});

export const { addProduct, deleteCart } = ProductSlice.actions;
export default ProductSlice.reducer;
