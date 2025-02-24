import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const slides = [
  {
    id: "slide-1",
    title: "Plan Your Events with Ease",
    description:
      "Effortlessly schedule and manage all your events in one place. Stay organized, stay on top.",
  },
  {
    id: "slide-2",
    title: "Never Miss a Moment",
    description:
      "With our real-time scheduling system, never miss a key event again. Get alerts and reminders right on time!",
  },
  {
    id: "slide-3",
    title: "Flexible & Customizable",
    description:
      "Tailor your event schedules to your needs. Flexible options for any type of event!",
  },
  {
    id: "slide-4",
    title: "Real-Time Updates",
    description:
      "Make last-minute changes with ease and notify everyone instantly with real-time updates.",
  },
  {
    id: "slide-5",
    title: "Seamless Integration",
    description:
      "Integrate with your favorite calendars and apps to keep all your events in sync.",
  },
];

const Slider = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 1536, min: 1280 }, items: 1 },
    desktop: { breakpoint: { max: 1279, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1023, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 767, min: 0 }, items: 1 },
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      arrows={false}
      autoPlaySpeed={3000}
    >
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="bg-background2 w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center border-bottom"
        >
          <div className="text-center max-w-md px-4 flex flex-col items-center gap-2">
            <h1 className="text-primary text-2xl md:text-3xl font-bold">
              {slide.title}
            </h1>
            <p className="text-secondary text-xs sm:text-sm">
              {slide.description}
            </p>
            <Link to={"/events"} className="primary-btn outline-btn w-fit">
              See Events
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
