import features from "/features.svg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-xl">
        <h1 className="text-base sm:text-xl font-bold text-center mb-8 text-primary">
          About Our Event Scheduler
        </h1>

        <div className="space-y-6">
          <section>
            <h2 className="font-semibold text-primary">
              Welcome to Our Platform
            </h2>
            <p className="text-secondary text-sm text-justify">
              Our Event Scheduler is designed to help authorized users manage
              events efficiently. Whether you're organizing a small meeting or a
              large conference, our platform provides the tools you need to add,
              update, view, and delete events seamlessly. Every event added by a
              user is reviewed and approved by an admin to ensure quality and
              relevance.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-primary">Key Features</h2>
            <div className="flex items-center justify-between">
              <ul className="list-disc list-inside space-y-2 text-secondary text-sm">
                <li>Add events with detailed information.</li>
                <li>Update or modify existing events.</li>
                <li>View all events in a clean and organized layout.</li>
                <li>Delete events that are no longer needed.</li>
                <li>Admin approval system to ensure event quality.</li>
              </ul>
              <img
                className="w-1/2 h-[300px] hidden md:block"
                src={features}
                alt="features"
              />
            </div>
          </section>

          <section>
            <h2 className="font-semibold mb-4 text-primary">Our Team</h2>
            <p className="text-sm text-secondary text-justify">
              We are a dedicated team of developers and designers passionate
              about creating tools that make event management easier and more
              efficient. Our goal is to provide a seamless experience for both
              users and admins.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-4 text-primary">Contact Us</h2>
            <p className="text-sm text-secondary text-justify">
              If you have any questions or feedback, feel free to reach out to
              us at{" "}
              <a
                href="mailto:support@eventscheduler.com"
                className="text-primary underline"
              >
                support@eventscheduler.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
