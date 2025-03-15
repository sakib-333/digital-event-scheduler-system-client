import { SubmitHandler, useForm } from "react-hook-form";
import PageTitle from "../../Components/PageTitle/PageTitle";

type Inputs = {
  title: string;
  description: string;
  photo: string;
  category: string;
  location: string;
  participant: string;
  date: string;
};

const AddEventPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="primary-width min-h-screen flex items-center justify-center mt-4 mx-auto">
      <PageTitle title="Add Event" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-md mx-auto w-full px-8 py-16 space-y-4 dark:bg-background2 rounded-md shadow-md"
      >
        <h1 className="text-center text-2xl md:text-3xl text-primary font-bold">
          Add event
        </h1>
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Event title"
            {...register("title", { required: true })}
            className="input dark:bg-background2 bg-background focus:border-common text-secondary border-common rounded-md input-sm w-full"
          />
        </label>
        <label className="form-control w-full">
          <textarea
            placeholder="Event description"
            {...register("description", { required: true })}
            className="input dark:bg-background2 bg-background max-h-28 h-full focus:border-common text-secondary border-common rounded-md input-sm w-full"
          ></textarea>
        </label>
        <label className="form-control w-full">
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            className="file-input border-common dark:bg-background2 text-secondary rounded-md bg-background file-input-sm w-full"
            {...register("photo")}
          />
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="form-control w-full">
            <select
              defaultValue="Select category"
              {...register("participant", { required: true })}
              className="input border-common text-secondary dark:bg-background2 rounded-md bg-background file-input-sm w-full"
            >
              <option disabled={true}>Select participant</option>
              <option value={"teachers"}>Teachers</option>
              <option value={"students"}>Students</option>
              <option value={"anyone"}>Anyone</option>
            </select>
          </label>
          <label className="form-control w-full">
            <select
              defaultValue="Select category"
              {...register("category", { required: true })}
              className="input border-common text-secondary dark:bg-background2 rounded-md bg-background file-input-sm w-full"
            >
              <option disabled={true}>Select category</option>
              <option value={"exam"}>Exam</option>
              <option value={"fest"}>Fest</option>
              <option value={"tour"}>Tour</option>
              <option value={"game"}>Game</option>
              <option value={"others"}>Others</option>
            </select>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="form-control w-full">
            <input
              type="text"
              placeholder="Location"
              className="input border-common dark:bg-background2 text-secondary rounded-md bg-background file-input-sm w-full"
              {...register("location", { required: true })}
            />
          </label>
          <label className="form-control w-full">
            <input
              {...register("date", { required: true })}
              type="date"
              className="input border-common dark:bg-background2 text-secondary rounded-md bg-background file-input-sm w-full"
            />
          </label>
        </div>
        <button className="primary-btn outline-btn w-full">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventPage;
