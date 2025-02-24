import PageTitle from "../../Components/PageTitle/PageTitle";
import EventCounter from "./EventCounter/EventCounter";
import FAQs from "./FAQs/FAQs";
import HowItWorks from "./HowItWorks/HowItWorks";
import Newsletter from "./Newsletter/Newsletter";
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
      <FAQs />
      <Newsletter />
    </div>
  );
};

export default HomePage;
