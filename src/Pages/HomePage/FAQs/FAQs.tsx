import Heading from "../../../Components/Heading/Heading";
import FAQsIcon from "../Assets/FAQs.svg";

const faqs = [
  {
    id: "faq_1",
    question: "How do I create an event?",
    answer: `Click the 'Add Event' button on the dashboard, fill in the
                details, and submit.`,
  },
  {
    id: "faq_2",
    question: "Can I edit an event after creating it?",
    answer: `Yes, go to 'My Events', click the edit button next to the event, make changes, and save.`,
  },
  {
    id: "faq_3",
    question: "How do I delete an event?",
    answer: `Find the event in 'My Events' and click the delete button. Confirm to remove it permanently.`,
  },
];

const FAQs = () => {
  return (
    <div className="primary-spacing bg-background2 primary-width mx-auto">
      <Heading title="FAQs" subtitle="Do clear if you have any confusion" />
      <div className="flex items-center justify-between md:gap-4">
        <div className="space-y-3 w-full md:w-1/2">
          {faqs.map((faq, indx) => (
            <div
              key={faq.id}
              className="collapse rounded-md collapse-plus bg-background2 border-common"
            >
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked={indx === 0}
              />
              <div className="collapse-title font-bold text-primary">
                {faq.question}
              </div>
              <div className="collapse-content text-xs text-secondary">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 hidden md:block">
          <img className="w-full h-[300px]" src={FAQsIcon} alt="FAQsIcon" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
