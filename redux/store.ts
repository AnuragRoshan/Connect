"use client";

import { configureStore } from "@reduxjs/toolkit";
import topLoaderReducer from "./slices/Loader/topLoaderSlice"; // Ensure this is the correct path
import themeReducer from "./slices/themeSlice";
import screenLoadingReducer from "./slices/Loader/screenLoadingSlice"; // Ensure this is the correct path

export function makeStore() {
  return configureStore({
    reducer: {
      topLoader: topLoaderReducer, // This should match the selector
      screenLoader: screenLoadingReducer, // Unified naming for clarity
      theme: themeReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
