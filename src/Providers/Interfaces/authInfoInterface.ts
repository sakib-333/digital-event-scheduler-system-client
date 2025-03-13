import { UserCredential } from "firebase/auth";
import updatedUserInterface from "./updatedUserInterface";

interface authInfoInterface {
  user: updatedUserInterface | null;
  userLoading: boolean;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
  // handleSigninWithGoogle: () => Promise<UserCredential>;
  handleSigninWithGoogle: () => void;
  handleLogout: () => void;
  signinWithEmailPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>;

  registerUserWithEmailPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  updateUserProfile: any;
}

export default authInfoInterface;
