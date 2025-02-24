import Heading from "../../../Components/Heading/Heading";
import registerIcon from "../Assets/register.svg";
import createIcon from "../Assets/create.svg";
import postIcon from "../Assets/post.svg";
import approveIcon from "../Assets/approve.svg";
import HowItWorksCard from "../../../Components/HowItWorksCard/HowItWorksCard";

const items = [
  {
    id: "HowItWorksCard_1",
    title: "Register",
    subtitle: "Do authorize yourself through google or email.",
    photoURL: registerIcon,
  },
  {
    id: "HowItWorksCard_2",
    title: "Create",
    subtitle: "Create which event is coming.",
    photoURL: createIcon,
  },
  {
    id: "HowItWorksCard_3",
    title: "Post",
    subtitle: "Post the created event.",
    photoURL: postIcon,
  },
  {
    id: "HowItWorksCard_4",
    title: "Approve",
    subtitle: "Wait for the admin to approve the event.",
    photoURL: approveIcon,
  },
];

const HowItWorks = () => {
  return (
    <div className="primary-spacing primary-width mx-auto">
      <Heading title="How It Works" subtitle="Step by step how it works." />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4">
        {items.map((item) => (
          <HowItWorksCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
