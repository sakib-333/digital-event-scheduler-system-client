import CountUp from "react-countup";
import * as motion from "motion/react-client";
import { springAnimation } from "../../Animation/springAnimation";

interface CounterProps {
  eventType: string;
  range: number;
}

const Counter = ({ eventType, range }: CounterProps) => {
  return (
    <motion.div
      variants={springAnimation()}
      initial={"initial"}
      whileInView={"whileInView"}
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-xs text-center flex flex-col justify-center"
    >
      <h1 className="text-primary text-2xl md:text-3xl">
        <CountUp duration={5} end={range} />
      </h1>
      <p className="text-secondary text-xs">{eventType}</p>
    </motion.div>
  );
};

export default Counter;
