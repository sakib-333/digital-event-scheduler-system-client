import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeContext/ThemeContext";

const useTheme = () => {
  const data = useContext(ThemeContext);

  return { ...data };
};

export default useTheme;
