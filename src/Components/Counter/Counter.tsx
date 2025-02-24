import CountUp from "react-countup";

interface CounterProps {
  eventType: string;
  range: number;
}

const Counter = ({ eventType, range }: CounterProps) => {
  return (
    <div className="max-w-xs text-center flex flex-col justify-center">
      <h1 className="text-primary text-2xl md:text-3xl">
        <CountUp duration={5} end={range} />
      </h1>
      <p className="text-secondary text-xs">{eventType}</p>
    </div>
  );
};

export default Counter;
