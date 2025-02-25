import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import ThemeProvider from "./Providers/ThemeProvider/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </HelmetProvider>
);
