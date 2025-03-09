import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import appLogoLight from "/appLogoLight.png";
import appLogoDark from "/appLogoDark.png";
import useTheme from "../../Hooks/useTheme/useTheme";
import useAuth from "../../Hooks/useAuth/useAuth";
import defaultUser from "/defaultUser.svg";
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const { theme } = useTheme();
  const { user, handleLogout } = useAuth();

  const navItems = (
    <>
      <li>
        <NavLink to={"/"} className="font-bold nav-link text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/events"} className="font-bold nav-link text-primary">
          Events
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
    <div className="drawer z-20 auto-cols-auto w-full mx-auto bg-background">
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
          {user ? (
            <>
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="cursor-pointer">
                  <img
                    title={`${user.displayName}`}
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL || defaultUser}
                  />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-background2 text-primary min-h-full w-44 p-4">
                  <li className="text-base md:text-lg font-bold">
                    Event Scheduler
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FaHome />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/my-profile"}>
                      <CgProfile /> <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/add-events"}>
                      <IoMdAdd />
                      <span>Add Events</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/my-events"}>
                      <MdOutlineEventNote />
                      <span>My Events</span>
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>
                      <RiLogoutBoxLine />
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to={"/login"} className="primary-btn">
                Login
              </Link>
              <Link
                to={"/register"}
                className="primary-btn outline-btn hidden sm:block"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
