import { MdAddAlert } from "react-icons/md";
import EventDetails from "../../Components/EventDetails/EventDetails";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxios/useAxiosPublic";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import NoDataFound from "../../Components/NoDataFound/NoDataFound";
import { successAlert } from "../../Components/Alerts/successAlert";
import { errorAlert } from "../../Components/Alerts/errorAlert";
import emailjs from "@emailjs/browser";
import { formatDate } from "../../Utils/formatDate";
import { useState } from "react";

const EventDetailsPage = () => {
  const [loading, setLoading] = useState<Boolean>(false);
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
    const today = new Date();
    const eventDate = new Date(event?.date);

    if (today < eventDate) {
      const templateParams = {
        senderName: "Sakibur Rahman",
        receiverName: user?.displayName,
        message: `${event?.title} is coimg on ${formatDate(event?.date)} in ${
          event?.location
        }. Please join in time.`,
        receiverEmail: user?.email,
      };

      setLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          successAlert("Success", "We have send an alert.");
        })
        .catch(() => {
          errorAlert("Failed", "Sorry can not send email");
        })
        .finally(() => setLoading(false));
    } else {
      errorAlert("Failed", "Sorry this event has finished");
    }
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
        {loading ? (
          <button
            disabled
            className="primary-btn cursor-not-allowed flex items-center gap-1"
          >
            <span>Loading...</span>
          </button>
        ) : (
          <button
            onClick={handlegetAlert}
            className="primary-btn flex items-center gap-1"
          >
            <MdAddAlert />
            <span>Get Alert</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default EventDetailsPage;
