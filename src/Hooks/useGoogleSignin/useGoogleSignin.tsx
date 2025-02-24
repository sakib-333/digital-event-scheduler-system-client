import { FcGoogle } from "react-icons/fc";

const useGoogleSignin = () => {
  return (
    <button
      type="button"
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
