import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    authData:{}
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        IsLogin: (state, action) => {
            return {
                ...state,
                login: action.payload
            }
        },
        IsLogOut: (state, action) => {
            return {
                ...state,
                login: action.payload
            }
        },
        addAllDataanother: (state, action) => {
            return {
                ...state,
                authData: action.payload
            };
        },
    }
});

export const { IsLogin, IsLogOut ,addAllDataanother} = AuthSlice.actions;
export default AuthSlice.reducer;
