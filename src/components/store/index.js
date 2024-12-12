import { configureStore } from "@reduxjs/toolkit";
import auth from "../../components/store/index";

const store = configureStore({
    reducer: {
        auth
    }
})

export default store