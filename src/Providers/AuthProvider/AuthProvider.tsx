import { ReactNode } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import authInfoInterface from "../Interfaces/authInfoInterface";

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const authInfo: authInfoInterface = {
    userName: "Sakibur Rahman",
    age: 26,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
