import { MdSend } from "react-icons/md";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  subject: string;
  description: string;
};

const ContactPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);
  return (
    <>
      <PageTitle title="Contact" />
      <div className="primary-width mt-4 mx-auto flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-screen-md shadow-lg dark:bg-background2 w-full border-common p-4 sm:p-6 md:p-8 lg:p-10 rounded-md gap-3 grid grid-cols-1 md:grid-cols-2"
        >
          <h1 className="text-primary font-bold md:col-span-2">Contact</h1>
          <div className="md:col-span-2">
            <input
              type="text"
              {...register("fullName", { required: true })}
              placeholder="Your name"
              className="input input-bordered text-secondary focus:border-common border-common bg-background rounded-md input-sm w-full"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email"
              {...register("email", { required: true })}
              className="input input-bordered text-secondary focus:border-common border-common bg-background rounded-md input-sm w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject line"
              {...register("subject", { required: true })}
              className="input input-bordered text-secondary focus:border-common border-common bg-background rounded-md input-sm w-full"
            />
          </div>
          <div className="md:col-span-2">
            <textarea
              placeholder="Description"
              rows={5}
              {...register("description", { required: true })}
              className="textarea textarea-bordered textarea-sm text-secondary focus:border-common border-common bg-background rounded-md w-full"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button className="flex items-center justify-center gap-1 w-full primary-btn outline-btn">
              <span>Send</span>
              <span>
                <MdSend />
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
