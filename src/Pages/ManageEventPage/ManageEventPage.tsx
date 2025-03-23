import { MdDeleteForever } from "react-icons/md";
import EventDetails from "../../Components/EventDetails/EventDetails";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { FaRegCheckCircle } from "react-icons/fa";
import useDataFetch from "../../Hooks/useDataFetch/useDataFetch";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import useDataSend from "../../Hooks/useDataSend/useDataSend";
import { successAlert } from "../../Components/Alerts/successAlert";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ManageEventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useDataFetch("Event", "event", {
    eventID: id,
  });
  const { isPending, isSuccess, mutate } = useDataSend();

  useEffect(() => {
    if (isSuccess) {
      successAlert("Success", "Event approved successfully");
      refetch();
    }
  }, [isSuccess]);

  const handleApproveEvent = async (eventID: string) => {
    mutate({ pathname: "event-approve", data: { eventID } });
  };

  const handleDeleteEvent = (eventID: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      background: "var(--background2)",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      customClass: {
        popup: "text-primary",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        mutate({ pathname: "delete-event", data: { eventID } });
        navigate(-1);
      }
    });
  };

  if (isLoading || isPending) {
    return <LoadingSpinner />;
  }

  if (!data.acknowledged) {
    return (
      <div className="primary-width mt-4 mx-auto min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl md:text-3xl text-primary font-bold">
          No event found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto dark:bg-background2">
      <PageTitle title="Manage Event" />
      <EventDetails event={data?.event} />
      <div className="flex justify-center gap-2 p-4">
        <button
          onClick={() => handleApproveEvent(data.event._id)}
          className={`primary-btn text-black bg-green-300 flex items-center gap-1 ${
            data?.event?.status === "approved" && "cursor-not-allowed"
          }`}
        >
          <FaRegCheckCircle />
          <span>
            {data?.event?.status === "approved" ? "Approved" : "Approve"}
          </span>
        </button>
        <button
          onClick={() => handleDeleteEvent(data.event._id)}
          className="primary-btn text-black bg-red-300 flex items-center gap-1"
        >
          <MdDeleteForever />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ManageEventPage;
