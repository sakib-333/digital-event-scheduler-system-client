interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="text-center py-2 w-fit mx-auto">
      <h1 className="text-2xl md:text-3xl text-heading font-bold">{title}</h1>
      <p className="text-text text-xs sm:text-sm max-w-sm mx-auto px-3">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
