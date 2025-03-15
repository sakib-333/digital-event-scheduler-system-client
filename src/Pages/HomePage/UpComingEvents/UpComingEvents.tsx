import { Link } from "react-router-dom";
import EventCard from "../../../Components/EventCard/EventCard";
import Heading from "../../../Components/Heading/Heading";

const events = [1, 2, 3, 4, 5, 6];

const UpComingEvents = () => {
  return (
    <div className="primary-spacing primary-width mx-auto">
      <Heading
        title="Up Coming Event"
        subtitle="Stay with us for the coming events."
      />
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
          {events.map((event) => (
            <EventCard key={event} />
          ))}
        </div>
        <div className="w-full flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <Link to={"/events"}>
            <button className="primary-btn outline-btn">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvents;
