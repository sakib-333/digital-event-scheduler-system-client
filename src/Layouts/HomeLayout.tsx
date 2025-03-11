import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import useTheme from "../Hooks/useTheme/useTheme";
import { Outlet } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import Footer from "../Components/Footer/Footer";
import useAuth from "../Hooks/useAuth/useAuth";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const HomeLayout = () => {
  const { theme, setTheme } = useTheme();
  const { userLoading } = useAuth();

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
    <div className="max-w-screen-2xl mx-auto bg-background relative">
      <Navbar />
      <div className="min-h-screen">
        {userLoading ? <LoadingSpinner /> : <Outlet />}
      </div>
      <Footer />
      <button
        className="w-8 h-8 rounded-full flex items-center justify-center text-primary fixed border-common right-5 bottom-5 z-10"
        onClick={hanleToggleTheme}
      >
        {theme === "light" ? <IoMdMoon /> : <IoSunnySharp />}
      </button>
    </div>
  );
};

export default HomeLayout;
