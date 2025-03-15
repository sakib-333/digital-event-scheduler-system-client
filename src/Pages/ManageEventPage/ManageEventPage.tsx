import { MdDeleteForever } from "react-icons/md";
import EventDetails from "../../Components/EventDetails/EventDetails";
import PageTitle from "../../Components/PageTitle/PageTitle";

const ManageEventPage = () => {
  return (
    <div className="max-w-screen-md mx-auto dark:bg-background2">
      <PageTitle title="Manage Event" />
      <EventDetails />
      <div className="flex justify-center p-4">
        <button className="primary-btn flex items-center gap-1">
          <MdDeleteForever className="text-[#f00]" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ManageEventPage;
