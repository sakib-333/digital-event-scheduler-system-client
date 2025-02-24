import PageTitle from "../../Components/PageTitle/PageTitle";
import Slider from "./Slider/Slider";
import UpComingEvents from "./UpComingEvents/UpComingEvents";

const HomePage = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Slider />
      <div className="primary-width mx-auto">
        <UpComingEvents />
      </div>
    </div>
  );
};

export default HomePage;
