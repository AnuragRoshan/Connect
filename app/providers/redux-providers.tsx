"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react"; // Import ReactNode for typing the children prop
import { store } from "@/redux/store"; // Ensure the store is correctly imported

interface ReduxProviderProps {
  children: ReactNode; // Type the children prop as ReactNode
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
