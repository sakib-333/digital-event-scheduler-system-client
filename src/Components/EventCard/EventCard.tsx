import { SlCalender } from "react-icons/sl";
import EventDefaultLogo from "/EventDefaultLogo.png";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import { springAnimation } from "../../Animation/springAnimation";
import { TbCategory } from "react-icons/tb";
import { EventCardInterface } from "../../Pages/EventsPage/EventsPage";
import { formatDate } from "../../Utils/formatDate";

interface EventCardProps {
  event: EventCardInterface;
}

const EventCard = ({ event }: EventCardProps) => {
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
        src={event.photo || EventDefaultLogo}
        alt="logo"
      />
      <div className="px-2">
        <h1 className="text-primary font-bold truncate">{event.title}</h1>
        <p className="text-secondary text-xs text-justify max-h-[64px] overflow-hidden">
          {event.description}
        </p>
      </div>
      <div className="px-2 text-xs text-secondary space-y-1">
        <p className="flex items-center gap-1 capitalize">
          <TbCategory />:<span className="capitalize">{event.category}</span>
        </p>
        <p className="flex items-center gap-1">
          <SlCalender />:<span>{formatDate(event.date)}</span>
        </p>
        <p className="flex items-center gap-1">
          <CiLocationOn />:<span>{event.location}</span>
        </p>
      </div>
      <div className="px-2 pb-2 flex justify-end">
        <Link to={`/event/${event._id}`}>
          <button className="primary-btn outline-btn">View Details</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EventCard;
