import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import ThemeProvider from "./Providers/ThemeProvider/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
