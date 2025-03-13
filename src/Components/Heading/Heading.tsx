interface HeadingProps {
  title: string;
  subtitle: string;
}

import { motion } from "motion/react";
import { fadeInAnimation } from "../../Animation/fadeInAnimation";

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="text-center space-y-2 w-fit mx-auto mb-2">
      <motion.h1
        variants={fadeInAnimation("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-2xl md:text-3xl text-primary font-bold"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={fadeInAnimation("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-secondary text-xs sm:text-sm max-w-sm mx-auto px-3"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default Heading;
