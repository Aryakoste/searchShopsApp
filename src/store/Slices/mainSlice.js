import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState:  {
        isAdmin: false
    },
    reducers: {
        setIsAdmin(state, action){
            state.isAdmin = action.payload.isAdmin
        }
    }
});


export const mainActions = mainSlice.actions;

export default mainSlice;