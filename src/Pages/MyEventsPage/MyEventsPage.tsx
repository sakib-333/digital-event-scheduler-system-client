import { useQuery } from "@tanstack/react-query";
import MyEventCard, { Event } from "../../Components/MyEventCard/MyEventCard";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAxiosSecure from "../../Hooks/useAxios/useAxiosSecure";
import useAuth from "../../Hooks/useAuth/useAuth";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";

const MyEventsPage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: myEvents = [], isLoading } = useQuery({
    queryKey: ["myEvents", user],
    queryFn: async () => {
      const res = await axiosSecure.post("/my-events", { email: user?.email });
      return res.data.myEvents;
    },
    refetchOnMount: true,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!myEvents.length) {
    return (
      <div className="primary-width mt-4 mx-auto min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl md:text-3xl text-primary font-bold">
          No event found
        </h1>
        <Link to={"/add-event"}>
          <button className="primary-btn outline-btn">Add Event</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="primary-width mt-4 mx-auto">
      <PageTitle title="My Events" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
        {myEvents.map((event: Event) => (
          <MyEventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default MyEventsPage;
