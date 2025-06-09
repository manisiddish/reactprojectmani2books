import { configureStore } from "@reduxjs/toolkit";
import Cartreduser from "./bookslice"
const store=configureStore({
        reducer:{
            books: Cartreduser
        }
})
export default store;