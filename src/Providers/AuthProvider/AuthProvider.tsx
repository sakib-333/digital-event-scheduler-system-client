import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import authInfoInterface from "../Interfaces/authInfoInterface";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxios/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxios/useAxiosSecure";
import { successAlert } from "../../Components/Alerts/successAlert";

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // Signin with google
  const handleSigninWithGoogle = () => {
    setUserLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) =>
        axiosPublic.post("/store-user", {
          displayName: res.user.displayName,
          email: res.user.email,
          userType: "general",
        })
      )
      .then(() => console.log("Login successful"))
      .catch((err) => console.log(err))
      .finally(() => setUserLoading(false));
  };

  // Logout
  const handleLogout = () => {
    setUserLoading(true);
    signOut(auth)
      .then(() => {
        successAlert("Logout Successful", "You have successfully logged out.");
        setUser(null);
      })
      .catch(() => console.log("Something went wrong."))
      .finally(() => setUserLoading(false));
  };

  // Trace user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      if (currUser) {
        setUser(currUser);
        axiosSecure
          .post("/jwt", { email: currUser.email })
          .then((res) => console.log(res))
          .catch(() => console.log("Something went wrong"))
          .finally(() => setUserLoading(false));
      } else {
        axiosSecure
          .post("/logout")
          .then(() => console.log("Cookie cleared"))
          .catch(() => console.log("Something went wrong"))
          .finally(() => setUserLoading(false));
      }
    });
    return () => unsubscribe();
  }, []);

  // Signin with email and password
  const signinWithEmailPassword = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerUserWithEmailPassword = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user
  const updateUserProfile = (displayName: string, photoURL: string) => {
    setUserLoading(true);
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, { displayName, photoURL });
    }
  };

  const authInfo: authInfoInterface = {
    user,
    userLoading,
    setUserLoading,
    handleSigninWithGoogle,
    handleLogout,
    signinWithEmailPassword,
    registerUserWithEmailPassword,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
