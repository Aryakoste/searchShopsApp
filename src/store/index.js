import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./Slices/mainSlice";

const store = configureStore({
    reducer: {
        main: mainSlice.reducer
    }
});

export default store;