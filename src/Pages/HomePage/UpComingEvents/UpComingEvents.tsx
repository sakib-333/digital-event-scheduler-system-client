import { Link } from "react-router-dom";
import EventCard from "../../../Components/EventCard/EventCard";
import Heading from "../../../Components/Heading/Heading";
import { EventCardInterface } from "../../EventsPage/EventsPage";

const event: EventCardInterface = {
  _id: "12g22",
  title: "2.2 Semester Exam",
  category: "Exam",
  date: "2025-04-01T00:00:00.000+00:00",
  description:
    "The Semester Exam is a final assessment that evaluates students' understanding of the material covered throughout the course. It tests both theoretical knowledge and practical skills, aiming to measure overall academic progress. The exam includes various question types, such as multiple-choice, essays, and problem-solving tasks. It serves as an opportunity for students to demonstrate their mastery of key concepts.",
  location: "Academic Building",
  photo: "https://i.ibb.co/Y47M0p30/exam.jpg",
};

const UpComingEvents = () => {
  return (
    <div className="primary-spacing primary-width mx-auto">
      <Heading
        title="Up Coming Event"
        subtitle="Stay with us for the coming events."
      />
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
          <EventCard key={Math.random()} event={event} />
          <EventCard key={Math.random()} event={event} />
          <EventCard key={Math.random()} event={event} />
          <EventCard key={Math.random()} event={event} />
          <EventCard key={Math.random()} event={event} />
          <EventCard key={Math.random()} event={event} />
        </div>
        <div className="w-full flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <Link to={"/events"}>
            <button className="primary-btn outline-btn">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvents;
