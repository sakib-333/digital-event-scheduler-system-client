import { Link, NavLink } from "react-router-dom";
import appLogoLight from "/appLogoLight.png";

const Navbar = () => {
  console.log(document.documentElement.classList);
  const navItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          style={({ isActive }) => ({
            color: "#000",
            background: "#fbfbfe",
            textDecoration: isActive ? "underline" : "none",
          })}
          className="font-bold"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          style={({ isActive }) => ({
            color: "#000",
            background: "#fbfbfe",
            textDecoration: isActive ? "underline" : "none",
          })}
          className="font-bold"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          style={({ isActive }) => ({
            color: "#000",
            background: "#fbfbfe",
            textDecoration: isActive ? "underline" : "none",
          })}
          className="font-bold"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-background shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-background rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src={appLogoLight}
            alt="logo"
          />
          <h1 className="text-xl text-heading font-bold hidden sm:block">
            Event Scheduler
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
