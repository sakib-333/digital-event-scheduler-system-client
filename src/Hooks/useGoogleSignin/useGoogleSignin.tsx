import { FcGoogle } from "react-icons/fc";
import useAuth from "../useAuth/useAuth";

const useGoogleSignin = () => {
  const { handleSigninWithGoogle } = useAuth();
  return (
    <button
      type="button"
      onClick={handleSigninWithGoogle}
      className="primary-btn w-full capitalize flex items-center justify-center gap-1"
    >
      <span>
        <FcGoogle />
      </span>
      <span>Sign in with Google</span>
    </button>
  );
};

export default useGoogleSignin;
