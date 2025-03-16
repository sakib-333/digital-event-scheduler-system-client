import { ReactNode } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, userLoading } = useAuth();
  const location = useLocation();

  if (userLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
