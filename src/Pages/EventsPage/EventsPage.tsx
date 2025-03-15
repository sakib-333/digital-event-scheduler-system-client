import EventCard from "../../Components/EventCard/EventCard";
import PageTitle from "../../Components/PageTitle/PageTitle";

const events = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const EventsPage = () => {
  return (
    <>
      <PageTitle title="Events" />
      <div className="primary-width mt-4 mx-auto">
        <div className="flex flex-col">
          <div className="w-full flex justify-center gap-4">
            <label className="max-w-sm form-control w-full">
              <input
                type="text"
                className="input bg-background dark:bg-background2 focus:border-common text-secondary border-common rounded-md input-sm w-full"
                placeholder="Search"
              />
            </label>

            <label className="max-w-sm form-control w-full">
              <select
                defaultValue="Select category"
                className="input border-common text-secondary dark:bg-background2 rounded-md bg-background file-input-sm w-full"
              >
                <option disabled={true}>Select category</option>
                <option value={"exam"}>Exam</option>
                <option value={"fest"}>Fest</option>
                <option value={"tour"}>Tour</option>
                <option value={"game"}>Game</option>
                <option value={"others"}>Others</option>
              </select>
            </label>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {events.map((event) => (
              <EventCard key={event} />
            ))}
          </div>
        </div>
        <div className="join flex justify-center mt-4 ">
          <button className="join-item btn btn-sm bg-background text-secondary border-common">
            «
          </button>
          <button className="join-item btn btn-sm primary-btn bg-background text-secondary border-common">
            Page 22
          </button>
          <button className="join-item btn btn-sm bg-background text-secondary border-common">
            »
          </button>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
