import { MdDeleteForever } from "react-icons/md";
import EventDetails from "../../Components/EventDetails/EventDetails";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { FaRegCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ManageEventPage = () => {
  const {
    state: { event },
  } = useLocation();

  return (
    <div className="max-w-screen-md mx-auto dark:bg-background2">
      <PageTitle title="Manage Event" />
      <EventDetails event={event} />
      <div className="flex justify-center gap-2 p-4">
        <button className="primary-btn text-black bg-green-300 flex items-center gap-1">
          <FaRegCheckCircle />
          <span>Approve</span>
        </button>
        <button className="primary-btn text-black bg-red-300 flex items-center gap-1">
          <MdDeleteForever />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ManageEventPage;
