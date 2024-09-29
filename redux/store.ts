// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import topLoaderReducer from "./slices/Loader/topLoaderSlice";
import themeReducer from "./slices/themeSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      topLoader: topLoaderReducer, // This should match the selector here topLoader is the slice name
      theme: themeReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
