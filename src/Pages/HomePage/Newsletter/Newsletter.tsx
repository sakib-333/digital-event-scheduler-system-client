import Heading from "../../../Components/Heading/Heading";

const Newsletter = () => {
  return (
    <div className="primary-spacing primary-width mx-auto">
      <Heading
        title="Newsletter"
        subtitle="Subscribe new, so never miss an update."
      />
      <form className="flex items-center gap-1 justify-center">
        <div>
          <input
            className="px-3 py-[2px] rounded-md bg-background border-common"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <button className="primary-btn outline-btn">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
