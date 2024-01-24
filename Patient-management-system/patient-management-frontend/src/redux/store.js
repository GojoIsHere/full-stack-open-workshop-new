import { configureStore } from "@reduxjs/toolkit";
import authSliceRedcuers from "./reducers/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    auth: authSliceRedcuers,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
setupListeners(store.dispatch);
