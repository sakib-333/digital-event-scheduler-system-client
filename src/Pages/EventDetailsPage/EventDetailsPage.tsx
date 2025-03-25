import { MdAddAlert } from "react-icons/md";
import EventDetails from "../../Components/EventDetails/EventDetails";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";

const EventDetailsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlegetAlert = () => {
    if (!user) {
      return navigate("/login");
    }
    // Send alert to currently logged in user email.
  };

  const event = {
    _id: "67da573ffc985ee78263989a",
    title: "Tour",
    description: "Test Description",
    photo: "https://i.ibb.co.com/FLWX4bfj/Event-Default-Logo.png",
    category: "tour",
    location: "Cox's Bazar",
    participant: "students",
    date: "2025-04-01",
    author: "moeen@gmail.com",
    status: "pending",
  };

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
