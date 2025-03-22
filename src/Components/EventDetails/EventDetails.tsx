import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { formatDate } from "../../Utils/formatDate";

type Event = {
  _id: string;
  title: string;
  description: string;
  photo: string;
  category: string;
  location: string;
  participant: string;
  date: string;
  author: string;
  status: "pending" | "approved";
};

interface EventDetailsProps {
  event: Event;
}

const EventDetails = ({ event }: EventDetailsProps) => {
  return (
    <div className="max-w-screen-md w-full dark:bg-background2 p-4 rounded mx-auto space-y-4">
      <img
        className="w-full max-h-[280px] rounded-t-md object-cover"
        src={event.photo}
        alt="logo"
      />
      <h1 className="text-2xl md:text-3xl text-primary font-bold text-justify">
        {event.title}
      </h1>
      <p className="text-secondary text-xs sm:text-sm text-justify">
        {event.description}
      </p>
      <div className="text-xs text-secondary flex flex-col sm:flex-row sm:justify-between">
        <p className="flex items-center gap-1">
          <BiCategory />:<span>{event.category}</span>
        </p>
        <p className="flex items-center gap-1">
          <CiLocationOn />:<span>{event.location}</span>
        </p>
      </div>
      <div className="text-xs text-secondary flex flex-col sm:flex-row sm:justify-between">
        <p className="flex items-center gap-1">
          <SlCalender />:<span>{formatDate(event.date)}</span>
        </p>
        <p className="flex items-center gap-1">
          <FaPeopleGroup />:<span>{event.participant}</span>
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
