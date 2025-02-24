import PageTitle from "../../Components/PageTitle/PageTitle";
import EventCounter from "./EventCounter/EventCounter";
import Slider from "./Slider/Slider";
import UpComingEvents from "./UpComingEvents/UpComingEvents";

const HomePage = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Slider />
        <UpComingEvents />
        <EventCounter />
      <div className="primary-width mx-auto">
      </div>
    </div>
  );
};

export default HomePage;
