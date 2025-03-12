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
import { successAlert } from "../../Components/Alerts/successAlert";
import useAxiosSecure from "../../Hooks/useAxios/useAxiosSecure";

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const googleProvider = new GoogleAuthProvider();

  // Signin with google
  const handleSigninWithGoogle = () => {
    setUserLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) =>
        axiosSecure.post("/users", {
          email: res.user.email,
          fullName: res.user.displayName,
          userType: "general",
        })
      )
      .then(() => {
        successAlert("Login successful", "You have successfully logged in");
      })
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
          .then(() => {
            setUserLoading(false);
          })
          .catch(() => console.log("Error message"))
          .finally(() => setUserLoading(false));
      } else {
        axiosSecure
          .post("/logout")
          .then(() => {
            setUserLoading(false);
          })
          .catch(() => console.log("Error message"))
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
