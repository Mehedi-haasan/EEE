import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    data:[]
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            return {
                ...state,
                data:action.payload
            }
        },
        deleteCart: (state, action) => {
            return {}
        }
    }
});

export const { addCart, deleteCart } = CartSlice.actions;
export default CartSlice.reducer;
