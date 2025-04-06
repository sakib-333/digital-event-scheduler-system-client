import { MdAddAlert } from "react-icons/md";
import EventDetails from "../../Components/EventDetails/EventDetails";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxios/useAxiosPublic";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import NoDataFound from "../../Components/NoDataFound/NoDataFound";

const EventDetailsPage = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: event, isLoading } = useQuery({
    queryKey: ["eventDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/get-event-by-id?id=${id}`);
      if (res.data.acknowledged) {
        return res.data.event;
      }
      return res.data.message;
    },
    refetchOnMount: true,
  });

  const handlegetAlert = () => {
    if (!user) {
      return navigate("/login");
    }
    // Send alert to currently logged in user email.
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (event === "No data found") {
    return <NoDataFound />;
  }

  return (
    <div className="max-w-screen-md mx-auto dark:bg-background2">
      <PageTitle title="Details" />
      <EventDetails event={event} />
      <div className="flex justify-center p-4">
        <button
          onClick={handlegetAlert}
          className="primary-btn flex items-center gap-1"
        >
          <MdAddAlert />
          <span>Get Alert</span>
        </button>
      </div>
    </div>
  );
};

export default EventDetailsPage;
