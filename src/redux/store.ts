import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@redux/slices/userSlice";
import productReducer from "@redux/slices/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
