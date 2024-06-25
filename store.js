import { configureStore } from "@reduxjs/toolkit";
// import {login, logout} from './authSlice'
import authReducer from './authSlice'
const store= configureStore({
reducer:{
    auth: authReducer
    // login, logout
}
});
export default store;