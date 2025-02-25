import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthContext/AuthContext";

const useAuth = () => {
  const data = useContext(AuthContext);

  return { ...data };
};

export default useAuth;
