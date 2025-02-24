import PageTitle from "../../Components/PageTitle/PageTitle";
import EventCounter from "./EventCounter/EventCounter";
import HowItWorks from "./HowItWorks/HowItWorks";
import Slider from "./Slider/Slider";
import UpComingEvents from "./UpComingEvents/UpComingEvents";

const HomePage = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Slider />
      <UpComingEvents />
      <EventCounter />
      <HowItWorks />
    </div>
  );
};

export default HomePage;
