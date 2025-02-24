import { Link } from "react-router-dom";
import errorIcon from "/error.svg";

const NotFoundPage = () => {
  return (
    <div className="max-w-screen-lg h-full max-h-[350px] mx-auto">
      <img
        className="max-w-screen-lg w-full h-full max-h-[400px]"
        src={errorIcon}
      />
      <div className="flex justify-center">
        <Link to={"/"} className="primary-btn outline-btn">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
