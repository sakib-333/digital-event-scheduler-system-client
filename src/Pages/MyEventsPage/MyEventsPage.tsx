import MyEventCard from "../../Components/MyEventCard/MyEventCard";

const myEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MyEventsPage = () => {
  return (
    <div className="primary-width mt-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
        {myEvents.map((_, indx) => (
          <MyEventCard key={indx} />
        ))}
      </div>
    </div>
  );
};

export default MyEventsPage;
