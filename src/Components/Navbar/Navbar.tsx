import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import appLogoLight from "/appLogoLight.png";
import appLogoDark from "/appLogoDark.png";
import useTheme from "../../Hooks/useTheme/useTheme";

const Navbar = () => {
  const { theme } = useTheme();
  const navItems = (
    <>
      <li>
        <NavLink to={"/"} className="font-bold nav-link text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className="font-bold nav-link text-primary">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className="font-bold nav-link text-primary">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full mx-auto bg-background">
      <div className="navbar mx-auto primary-width bg-background border-bottom">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pl-0 text-primary lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-background border-common rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src={theme === "dark" ? appLogoDark : appLogoLight}
              alt="logo"
            />
            <h1 className="text-xl text-primary font-bold hidden sm:block">
              Event Scheduler
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex items-center gap-1">
          <Link to={"/login"} className="primary-btn">
            Login
          </Link>
          <Link
            to={"/register"}
            className="primary-btn outline-btn hidden sm:block"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
