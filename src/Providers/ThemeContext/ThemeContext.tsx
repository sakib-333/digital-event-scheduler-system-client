import { createContext, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
