import EventCard from "../../Components/EventCard/EventCard";
import PageTitle from "../../Components/PageTitle/PageTitle";

const events = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const EventsPage = () => {
  return (
    <>
      <PageTitle title="Events" />
      <div className="primary-width mt-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
          {events.map((event) => (
            <EventCard key={event} />
          ))}
        </div>
        <div className="join flex justify-center mt-4 ">
          <button className="join-item btn btn-sm bg-background text-secondary border-common">«</button>
          <button className="join-item btn btn-sm primary-btn bg-background text-secondary border-common">Page 22</button>
          <button className="join-item btn btn-sm bg-background text-secondary border-common">»</button>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
