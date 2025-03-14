import { ReactNode } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Navigate } from "react-router-dom";

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { user, handleLogout } = useAuth();

  if (user?.userType !== "admin") {
    handleLogout();
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default AdminRoute;
