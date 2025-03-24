import Swal from "sweetalert2";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useDataFetch from "../../Hooks/useDataFetch/useDataFetch";
import useDataSend from "../../Hooks/useDataSend/useDataSend";
import { useEffect } from "react";
import { successAlert } from "../../Components/Alerts/successAlert";

type User = {
  _id: string;
  email: string;
  fullName: string;
  userType: string;
};

const ManageUsersPage = () => {
  const { data, isLoading, isFetching, refetch } = useDataFetch(
    "manageUsers",
    "get-all-users",
    {}
  );
  const { isPending, isSuccess, mutate } = useDataSend();

  useEffect(() => {
    if (!isFetching) {
      refetch();
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      successAlert("Success", "The user is admin now.");
      refetch();
    }
  }, [isSuccess]);

  const handleAdminMake = (email: string) => {
    Swal.fire({
      background: "var(--background2)",
      title: "Warning",
      icon: "warning",
      text: "This user will be admin",
      showCancelButton: true,
      confirmButtonText: "Proceed",
      customClass: {
        popup: "text-primary",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        mutate({ pathname: "make-admin", data: { reqAdminEmail: email } });
      }
    });
  };

  if (isLoading || isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div className="primary-width mt-4 mx-auto">
      <PageTitle title="Manage Users" />
      <div className="overflow-x-auto rounded-md primary-border bg-background dark:bg-background2">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-primary">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-secondary">
            {data.users.map((user: User, indx: number) => (
              <tr
                className="hover:bg-background2 dark:hover:bg-background"
                key={user._id}
              >
                <th>{indx + 1}</th>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.userType}</td>
                <td className="min-w-fit">
                  <button
                    onClick={() => handleAdminMake(user.email)}
                    disabled={user.userType === "admin"}
                    className={`primary-btn outline-btn ${
                      user.userType === "admin" && "cursor-not-allowed"
                    }`}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsersPage;
