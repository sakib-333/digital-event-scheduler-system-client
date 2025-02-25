import { createContext } from "react";
import authInfoInterface from "../Interfaces/authInfoInterface";

export const AuthContext = createContext<authInfoInterface | null>(null);
