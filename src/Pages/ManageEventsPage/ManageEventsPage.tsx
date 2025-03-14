import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";

const events = [1, 2, 3, 4, 5, 6, 7, 8];

const ManageEventsPage = () => {
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
            {events.map((event, indx) => (
              <tr
                className="hover:bg-background2 dark:hover:bg-background"
                key={event}
              >
                <th>{indx + 1}</th>
                <td>4.2 Semester Comming</td>
                <td>Exam</td>
                <td>12/03/2025</td>
                <td>Academic building</td>
                <td>{indx % 2 ? "Approved" : "Pending"}</td>
                <td>
                  <Link
                    to={`/manage-events/${indx}`}
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
