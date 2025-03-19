import { SlCalender } from "react-icons/sl";
import EventDefaultLogo from "/EventDefaultLogo.png";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import { springAnimation } from "../../Animation/springAnimation";
import { TbCategory } from "react-icons/tb";

const EventCard = () => {
  return (
    <motion.div
      variants={springAnimation()}
      initial={"initial"}
      whileInView={"whileInView"}
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-sm w-full border hover:shadow-lg transition border-border rounded-md space-y-2 overflow-hidden"
    >
      <img
        className="w-full max-h-[180px] rounded-t-md object-cover"
        src={EventDefaultLogo}
        alt="logo"
      />
      <div className="px-2">
        <h1 className="text-primary font-bold truncate">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-secondary text-xs text-justify max-h-[64px] overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa
          pariatur repellendus. Dicta qui quibusdam, velit corporis hic fugiat
          dolorem nesciunt minima delectus dolor labore. Aliquid commodi porro
          labore sunt!
        </p>
      </div>
      <div className="px-2 text-xs text-secondary space-y-1">
        <p className="flex items-center gap-1 capitalize">
          <TbCategory />:<span>Exam</span>
        </p>
        <p className="flex items-center gap-1">
          <SlCalender />:<span>24/02/2025</span>
        </p>
        <p className="flex items-center gap-1">
          <CiLocationOn />:<span>CSE Dept. Room-408</span>
        </p>
      </div>
      <div className="px-2 pb-2 flex justify-end">
        <Link to={`/event/1`}>
          <button className="primary-btn outline-btn">View Details</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EventCard;
