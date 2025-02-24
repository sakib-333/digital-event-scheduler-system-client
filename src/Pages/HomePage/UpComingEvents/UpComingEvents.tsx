import Heading from "../../../Components/Heading/Heading";

// const events = [1, 2, 3, 4, 5, 6];

const UpComingEvents = () => {
  return (
    <div className="primary-margin">
      <Heading
        title="Up Coming Event"
        subtitle="Stay with us for the coming events."
      />
      <div className="w-full h-[300px] border-common">
        <div className="w-full flex justify-center">
          <button className="primary-btn outline-btn">See More</button>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvents;
