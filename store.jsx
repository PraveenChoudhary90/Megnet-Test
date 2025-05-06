import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./CartSlice";
const store = configureStore({
    reducer:{
        mycart:myreducer}
})

export default store;