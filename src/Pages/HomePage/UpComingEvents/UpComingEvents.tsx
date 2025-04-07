import { Link } from "react-router-dom";
import EventCard from "../../../Components/EventCard/EventCard";
import Heading from "../../../Components/Heading/Heading";
import { EventCardInterface } from "../../EventsPage/EventsPage";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxios/useAxiosPublic";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import NoDataFound from "../../../Components/NoDataFound/NoDataFound";

const UpComingEvents = () => {
  const axiosPublic = useAxiosPublic();
  const { data: upComingEvents, isLoading } = useQuery({
    queryKey: ["upComingEvents"],
    queryFn: async () => {
      const res = await axiosPublic.get("/up-coming-events");
      if (res.data.acknowledged) {
        return res.data.upComingEvents;
      }
      return res.data.message;
    },
  });
  return (
    <div className="primary-spacing primary-width mx-auto">
      <Heading
        title="Up Coming Event"
        subtitle="Stay with us for the coming events."
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : upComingEvents === "No data found" ? (
        <NoDataFound />
      ) : (
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {upComingEvents.map((event: EventCardInterface) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
          <div className="w-full flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <Link to={"/events"}>
              <button className="primary-btn outline-btn">See More</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpComingEvents;
