import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userAPI";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer, // Add the userApi reducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), // Add the userApi middleware
});

export default store;
