import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { formatDate } from "../../Utils/formatDate";
import useEventDelete from "../../Hooks/useEventDelete/useEventDelete";

export type Event = {
  _id: string;
  title: string;
  description: string;
  photo: string;
  category: "exam" | "fest" | "tour" | "game" | "others";
  location: string;
  date: string;
};

interface MyEventCardProps {
  event: Event;
  refetch: () => void;
}

const MyEventCard = ({ event, refetch }: MyEventCardProps) => {
  const handleEventDelete = useEventDelete();

  return (
    <div className="max-w-sm w-full group border hover:shadow-lg transition hover:scale-[1.02] border-border rounded-md space-y-2 overflow-hidden">
      <img
        className="w-full max-h-[180px] h-full rounded-t-md object-cover"
        src={event.photo}
        alt="logo"
      />
      <div className="px-2">
        <h1 className="text-primary font-bold truncate">{event.title}</h1>
        <p className="text-secondary text-xs text-justify h-[64px] overflow-hidden">
          {event.description}
        </p>
      </div>
      <div className="px-2 text-xs text-secondary space-y-1">
        <p className="flex items-center gap-1 capitalize">
          <TbCategory />:<span>{event.category}</span>
        </p>
        <p className="flex items-center gap-1">
          <SlCalender />:<span>{formatDate(event.date)}</span>
        </p>
        <p className="flex items-center gap-1">
          <CiLocationOn />:<span>{event.location}</span>
        </p>
      </div>
      <div className="px-2 pb-4 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition">
        <Link to={`/edit/${event._id}`}>
          <button className="primary-btn outline-btn">Edit</button>
        </Link>
        <button
          className="primary-btn outline-btn"
          onClick={() => handleEventDelete(event._id, refetch)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyEventCard;
