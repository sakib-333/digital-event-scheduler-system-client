import Swal from "sweetalert2";
import useAxiosSecure from "../useAxios/useAxiosSecure";
import useAuth from "../useAuth/useAuth";
import { successAlert } from "../../Components/Alerts/successAlert";
import { errorAlert } from "../../Components/Alerts/errorAlert";

const useEventDelete = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const handleEventDelete = (eventID: string, refetch: () => void) => {
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
        axiosSecure
          .post("/delete-event", { email: user?.email, eventID })
          .then((res) => {
            if (res.data.acknowledged) {
              successAlert("Success", res.data.message);
              refetch();
            }
          })
          .catch(() => {
            errorAlert("Failed", "Sorry! Can not delete event");
          });
      }
    });
  };

  return handleEventDelete;
};

export default useEventDelete;
