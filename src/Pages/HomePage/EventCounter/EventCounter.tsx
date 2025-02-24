import Counter from "../../../Components/Counter/Counter";
import Heading from "../../../Components/Heading/Heading";

const EventCounter = () => {
  return (
    <div className="primary-spacing bg-background2 primary-width mx-auto">
      <Heading title="Event Counter" subtitle="All of our events" />
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
        <Counter eventType={"Total events"} range={100} />
        <Counter eventType={"Completed events"} range={60} />
        <Counter eventType={"Upcoming events"} range={40} />
      </div>
    </div>
  );
};

export default EventCounter;
