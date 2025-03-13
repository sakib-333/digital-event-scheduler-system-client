import { User as FirebaseUser } from "firebase/auth";

interface updatedUserInterface extends FirebaseUser {
  userType: "admin" | "general" | null;
}

export default updatedUserInterface;
