import { useQuery } from "@tanstack/react-query";
import Counter from "../../../Components/Counter/Counter";
import Heading from "../../../Components/Heading/Heading";
import useAxiosPublic from "../../../Hooks/useAxios/useAxiosPublic";

const EventCounter = () => {
  const axiosPublic = useAxiosPublic();
  const { data: eventCount } = useQuery({
    queryKey: ["eventCounter"],
    queryFn: async () => {
      const res = await axiosPublic.get("/count-events");
      if (res.data.acknowledged) {
        return {
          totalEvents: res.data.totalEvents,
          completedEvents: res.data.completedEvents,
        };
      }
      return {
        totalEvents: 0,
        completedEvents: 0,
      };
    },
  });
  return (
    <div className="primary-spacing bg-background2 primary-width mx-auto">
      <Heading title="Event Counter" subtitle="All of our events" />
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
        <Counter
          eventType={"Total events"}
          range={eventCount?.totalEvents || 0}
        />
        <Counter
          eventType={"Completed events"}
          range={eventCount?.completedEvents || 0}
        />
        <Counter
          eventType={"Upcoming events"}
          range={eventCount?.totalEvents - eventCount?.completedEvents || 0}
        />
      </div>
    </div>
  );
};

export default EventCounter;
