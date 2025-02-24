import Slider from "./Slider/Slider";
import UpComingEvents from "./UpComingEvents/UpComingEvents";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <div className="primary-width mx-auto">
        <UpComingEvents />
      </div>
    </div>
  );
};

export default HomePage;
