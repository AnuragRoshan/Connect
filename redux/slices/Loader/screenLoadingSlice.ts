"use client";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state type
interface ScreenLoaderState {
  isScreenLoading: boolean;
}

const initialState: ScreenLoaderState = {
  isScreenLoading: false, // Loader hidden initially
};

const screenLoaderSlice = createSlice({
  name: "screenLoader",
  initialState,
  reducers: {
    startScreenLoading: (state) => {
      state.isScreenLoading = true; // Start loading
    },
    stopScreenLoading: (state) => {
      state.isScreenLoading = false; // Stop loading
    },
  },
});

// Export actions
export const { startScreenLoading, stopScreenLoading } =
  screenLoaderSlice.actions;

// Selector with typed state
export const selectScreenLoaderStatus = (state: {
  screenLoader: ScreenLoaderState;
}) => state.screenLoader.isScreenLoading;

// Export the reducer
export default screenLoaderSlice.reducer;
