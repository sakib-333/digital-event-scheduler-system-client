import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import useTheme from "../Hooks/useTheme/useTheme";

const HomeLayout = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const hanleToggleTheme = () => {
    if (setTheme) {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <button className="btn-primary" onClick={hanleToggleTheme}>
        Toggle theme
      </button>
    </div>
  );
};

export default HomeLayout;
