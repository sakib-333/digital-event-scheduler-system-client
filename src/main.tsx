import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import ThemeProvider from "./Providers/ThemeProvider/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </HelmetProvider>
);
