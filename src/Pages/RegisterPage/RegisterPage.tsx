import { SubmitHandler, useForm } from "react-hook-form";
import PageTitle from "../../Components/PageTitle/PageTitle";
import usePassShowing from "../../Hooks/usePassShowing/usePassShowing";
import useGoogleSignin from "../../Hooks/useGoogleSignin/useGoogleSignin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../Hooks/useAuth/useAuth";
import { successAlert } from "../../Components/Alerts/successAlert";
import useAxiosPublic from "../../Hooks/useAxios/useAxiosPublic";
import { errorAlert } from "../../Components/Alerts/errorAlert";

type Inputs = {
  fullName: string;
  email: string;
  photo: string;
  password: string;
};

const RegisterPage = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { show, handleToggle } = usePassShowing();
  const googleSignin = useGoogleSignin();
  const { registerUserWithEmailPassword, updateUserProfile, setUserLoading } =
    useAuth();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setUserLoading(true);

    const formData = new FormData();
    formData.append("image", data.photo[0]);

    const api_key = import.meta.env.VITE_IMGBB_API_KEY;
    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${api_key}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        const photoURL = res.data.data.url;
        registerUserWithEmailPassword(data.email, data.password)
          .then(() => updateUserProfile(data.fullName, photoURL))
          .then(() =>
            axiosPublic.post("/users", {
              email: data.email,
              fullName: data.fullName,
              userType: "general",
            })
          )
          .then(() => {
            successAlert(
              "Registration successful",
              "You have successfully registered."
            );
          })
          .catch((err) => {
            errorAlert("Registration failed", err.message);
          })
          .finally(() => setUserLoading(false));
      } else {
        setUserLoading(false);
      }
    } catch (err) {
      errorAlert("Registration failed", "Something went wrong");
    } finally {
      setUserLoading(false);
    }
  };
  return (
    <>
      <PageTitle title="Register" />
      <div className="w-full flex items-center p-4 justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-sm w-full px-8 py-16 space-y-4 rounded-md shadow-md border-common"
        >
          <h1 className="text-primary font-bold">Register</h1>
          <label className="form-control w-full">
            <input
              type="text"
              placeholder="Enter full name"
              {...register("fullName", { required: true })}
              className="input bg-background focus:border-common text-secondary border-common rounded-md input-sm w-full"
            />
          </label>
          <label className="form-control w-full">
            <input
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
              className="input bg-background focus:border-common text-secondary border-common rounded-md input-sm w-full"
            />
          </label>
          <label className="form-control w-full">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              className="file-input border-common text-secondary rounded-md bg-background file-input-sm w-full"
              {...register("photo", { required: true })}
            />
          </label>
          <label className="form-control w-full relative">
            <input
              type={show ? "text" : "password"}
              {...register("password", {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
              })}
              placeholder="Enter password"
              className="input bg-background focus:border-common border-common text-secondary rounded-md input-sm w-full"
            />
            <button
              type="button"
              onClick={handleToggle}
              className="absolute right-3 top-2 text-secondary"
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </button>
          </label>
          {errors.password && (
            <p className="text-red-400 text-xs text-justify">
              Password must consist at least one uppercase, one lowercase, one
              number, and length at least 6 characters.
            </p>
          )}

          <div>
            <button className="primary-btn outline-btn w-full">Register</button>
          </div>
          <div className="divider before:bg-secondary after:bg-secondary text-secondary">
            Or
          </div>
          {googleSignin}
          <p className="text-xs text-center text-secondary">
            <span>Already have an account? Please login</span>{" "}
            <Link to={"/login"} className="underline text-[#00f]">
              here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
