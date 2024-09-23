// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import topLoaderReducer from "./slices/Loader/topLoaderSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      topLoader: topLoaderReducer, // This should match the selector
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
