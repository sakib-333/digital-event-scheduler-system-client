import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
