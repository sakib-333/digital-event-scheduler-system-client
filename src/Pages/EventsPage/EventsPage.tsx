import { useState } from "react";
import EventCard from "../../Components/EventCard/EventCard";
import PageTitle from "../../Components/PageTitle/PageTitle";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxios/useAxiosPublic";

export interface EventCardInterface {
  category: string;
  date: string;
  description: string;
  location: string;
  photo: string;
  title: string;
  _id: string;
}

const EventsPage = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const axiosPublic = useAxiosPublic();
  const { data: events = [], isLoading } = useQuery({
    queryKey: ["allEvents", `${searchKey}`, `${category}`],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/get-all-events?searchKey=${searchKey}&category=${category}`
      );

      if (res.data.acknowledged) {
        return res.data.events;
      }
      return [];
    },
  });

  return (
    <>
      <PageTitle title="Events" />
      <div className="primary-width mt-4 mx-auto">
        <div className="flex flex-col">
          <div className="w-full flex justify-center gap-4">
            <label className="max-w-sm form-control w-full">
              <input
                type="text"
                value={searchKey}
                className="input bg-background dark:bg-background2 focus:border-common text-secondary border-common rounded-md input-sm w-full"
                placeholder="Search"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchKey(e.target.value)
                }
              />
            </label>

            <label className="max-w-sm form-control w-full">
              <select
                value={category}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCategory(e.target.value)
                }
                className="input border-common text-secondary dark:bg-background2 rounded-md bg-background file-input-sm w-full"
              >
                <option value={""}>Select category</option>
                <option value={"exam"}>Exam</option>
                <option value={"fest"}>Fest</option>
                <option value={"tour"}>Tour</option>
                <option value={"game"}>Game</option>
                <option value={"others"}>Others</option>
              </select>
            </label>
          </div>
          {isLoading && <LoadingSpinner />}
          {!events.length && (
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-2xl md:text-3xl text-primary font-bold">
                No data found
              </h1>
            </div>
          )}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {events.map((event: EventCardInterface) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
        {/* <div className="join flex justify-center mt-4 ">
          <button className="join-item btn btn-sm bg-background text-secondary border-common">
            «
          </button>
          <button className="join-item btn btn-sm primary-btn bg-background text-secondary border-common">
            Page 22
          </button>
          <button className="join-item btn btn-sm bg-background text-secondary border-common">
            »
          </button>
        </div> */}
      </div>
    </>
  );
};

export default EventsPage;
