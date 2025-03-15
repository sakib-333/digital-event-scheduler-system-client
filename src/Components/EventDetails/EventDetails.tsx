import { SlCalender } from "react-icons/sl";
import EventDefaultLogo from "/EventDefaultLogo.png";
import { CiLocationOn } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";

const EventDetails = () => {
  return (
    <div className="max-w-screen-md w-full dark:bg-background2 p-4 rounded mx-auto space-y-4">
      <img
        className="w-full max-h-[280px] rounded-t-md object-cover"
        src={EventDefaultLogo}
        alt="logo"
      />
      <h1 className="text-2xl md:text-3xl text-primary font-bold text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <p className="text-secondary text-xs sm:text-sm text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam alias
        cum vero quibusdam expedita fugit similique assumenda, ab vel
        reprehenderit exercitationem, voluptatum soluta necessitatibus. Error
        dolorum cum consequuntur molestiae sed!
      </p>
      <div className="text-xs text-secondary flex flex-col sm:flex-row sm:justify-between">
        <p className="flex items-center gap-1">
          <BiCategory />:<span>Exam</span>
        </p>
        <p className="flex items-center gap-1">
          <CiLocationOn />:<span>CSE Dept. Room-408</span>
        </p>
      </div>
      <div className="text-xs text-secondary flex flex-col sm:flex-row sm:justify-between">
        <p className="flex items-center gap-1">
          <SlCalender />:<span>24/02/2025</span>
        </p>
        <p className="flex items-center gap-1">
          <FaPeopleGroup />:<span>Anyone can join</span>
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
