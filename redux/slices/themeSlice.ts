"use client";
import { createSlice } from "@reduxjs/toolkit";

// Function to load theme from localStorage
const loadThemeFromLocalStorage = (): boolean => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark"; // Default to dark mode if "dark" is stored
  }
  return false; // Default to dark mode if nothing is stored
};

interface ThemeState {
  isDarkMode: boolean;
}

// Initialize the state based on localStorage
const initialState: ThemeState = {
  isDarkMode: loadThemeFromLocalStorage(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // Persist the updated theme in localStorage
      localStorage.setItem("theme", state.isDarkMode ? "dark" : "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkMode = (state: { theme: ThemeState }) =>
  state.theme.isDarkMode;

export default themeSlice.reducer;
