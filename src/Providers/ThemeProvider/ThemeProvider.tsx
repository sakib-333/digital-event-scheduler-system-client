import { ReactNode, useState } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
