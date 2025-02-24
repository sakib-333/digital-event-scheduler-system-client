type Data = {
  photoURL: string;
  title: string;
  subtitle: string;
};

interface HowItWorksCardProps {
  data: Data;
}

const HowItWorksCard = ({ data }: HowItWorksCardProps) => {
  return (
    <div className="border border-border p-2 rounded-md max-w-xs w-full text-center flex flex-col items-center">
      <img
        className="w-16 h-16 md:w-20 md:h-20"
        src={data.photoURL}
        alt="postIcon"
      />
      <h1 className="text-primary font-bold">{data.title}</h1>
      <p className="text-secondary text-xs">{data.subtitle}</p>
    </div>
  );
};

export default HowItWorksCard;
