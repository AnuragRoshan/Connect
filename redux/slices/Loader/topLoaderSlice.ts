"use client";
// src/redux/slices/topLoaderSlice.ts
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state type
interface TopLoaderState {
  isTopLoading: boolean;
}

const initialState: TopLoaderState = {
  isTopLoading: false, // Set to false if you want the loader hidden initially
};

const topLoaderSlice = createSlice({
  name: "topLoader",
  initialState,
  reducers: {
    startTopLoading: (state) => {
      state.isTopLoading = true;
    },
    stopTopLoading: (state) => {
      state.isTopLoading = false;
    },
  },
  extraReducers: (builder) => {
    // Handle any additional async actions here if needed
  },
});

// Export actions
export const { startTopLoading, stopTopLoading } = topLoaderSlice.actions;

// Selector with typed state
export const selectTopLoaderStatus = (state: { topLoader: TopLoaderState }) =>
  state.topLoader.isTopLoading;

// Export the reducer
export default topLoaderSlice.reducer;
