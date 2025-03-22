import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useDataFetch from "../../Hooks/useDataFetch/useDataFetch";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { formatDate } from "../../Utils/formatDate";

type Event = {
  _id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  status: "pending" | "approved";
};

const ManageEventsPage = () => {
  const { data, isLoading } = useDataFetch(
    "manageEvents",
    "get-all-events-for-admin",
    {}
  );

  if (isLoading) {
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
    <div className="primary-width mt-4 mx-auto">
      <PageTitle title="Manage Events" />
      <div className="overflow-x-auto rounded-md primary-border bg-background dark:bg-background2">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-primary">
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-secondary">
            {data.allEvents.map((event: Event, indx: number) => (
              <tr
                className="hover:bg-background2 dark:hover:bg-background"
                key={event._id}
              >
                <th>{indx + 1}</th>
                <td>{event.title}</td>
                <td>{event.category}</td>
                <td>{formatDate(event.date) || ""}</td>
                <td>{event.location}</td>
                <td>{event.status}</td>
                <td>
                  <Link
                    to={`/manage-event/${event._id}`}
                    className="hover:underline"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEventsPage;
