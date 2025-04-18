import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import EventsPage from "../Pages/EventsPage/EventsPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import MyProfilePage from "../Pages/MyProfilePage/MyProfilePage";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AddEventPage from "../Pages/AddEventPage/AddEventPage";
import MyEventsPage from "../Pages/MyEventsPage/MyEventsPage";
import ManageEventsPage from "../Pages/ManageEventsPage/ManageEventsPage";
import AdminRoute from "../Components/AdminRoute/AdminRoute";
import ManageUsersPage from "../Pages/ManageUsersPage/ManageUsersPage";
import EventDetailsPage from "../Pages/EventDetailsPage/EventDetailsPage";
import EditEventPage from "../Pages/EditEventPage/EditEventPage";
import ManageEventPage from "../Pages/ManageEventPage/ManageEventPage";
import AskAlicePage from "../Pages/AskAlicePage/AskAlicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/ask-alice",
        element: <AskAlicePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/event/:id",
        element: <EventDetailsPage />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-event",
        element: (
          <PrivateRoute>
            <AddEventPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit/:id",
        element: (
          <PrivateRoute>
            <EditEventPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-events",
        element: (
          <PrivateRoute>
            <MyEventsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-events",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageEventsPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-event/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageEventPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsersPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
