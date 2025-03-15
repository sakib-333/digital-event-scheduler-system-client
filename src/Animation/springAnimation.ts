export const springAnimation = () => {
  return {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.3, 0.3, 0.3, 0.3],
      },
    },
  };
};
