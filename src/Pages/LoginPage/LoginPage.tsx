import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import usePassShowing from "../../Hooks/usePassShowing/usePassShowing";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useGoogleSignin from "../../Hooks/useGoogleSignin/useGoogleSignin";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { show, handleToggle } = usePassShowing();
  const googleSignin = useGoogleSignin();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
  };
  return (
    <div className="w-full flex items-center p-4 justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm w-full px-8 py-16 space-y-4 rounded-md shadow-md border-common"
      >
        <h1 className="text-primary font-bold">Login</h1>
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Enter email"
            {...register("email", { required: true })}
            className="input bg-background focus:border-common text-secondary border-common rounded-md input-sm w-full"
          />
        </label>
        <label className="form-control w-full relative">
          <input
            type={show ? "text" : "password"}
            {...register("password", { required: true })}
            placeholder="Enter password"
            className="input bg-background focus:border-common border-common text-secondary rounded-md input-sm w-full"
          />
          <button
            type="button"
            onClick={handleToggle}
            className="absolute right-3 top-2"
          >
            {show ? <FaEye /> : <FaEyeSlash />}
          </button>
        </label>
        <div>
          <button className="primary-btn outline-btn w-full">Login</button>
        </div>
        <div className="divider before:bg-secondary after:bg-secondary text-secondary">
          Or
        </div>
        {googleSignin}
        <p className="text-xs text-center text-secondary">
          <span>Don't have an account? Please register</span>{" "}
          <Link to={"/register"} className="underline text-[#00f]">
            here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
