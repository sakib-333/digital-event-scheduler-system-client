import { SubmitHandler, useForm } from "react-hook-form";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../Hooks/useAxios/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { formatDate } from "../../Utils/formatDate";
import { useState } from "react";
import usePhotoUpload from "../../Hooks/usePhotoUpload/usePhotoUpload";
import { successAlert } from "../../Components/Alerts/successAlert";
const photoURL = "https://i.ibb.co.com/FLWX4bfj/Event-Default-Logo.png";

type Inputs = {
  title: string;
  description: string;
  photo: string;
  category: string;
  location: string;
  participant: string;
  date: string;
};

type EditEventData = {
  updatedEvent: Inputs;
  email: string | null | undefined;
  eventID: string | null;
};

const EditEventPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { id: eventID = null } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myEvent,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myEvent", eventID],
    queryFn: async () => {
      const res = await axiosSecure.post("/my-event", {
        email: user?.email,
        eventID,
      });
      return res.data.myEvent;
    },
    refetchOnMount: true,
  });

  const [uploading, setUploading] = useState<boolean>(false);
  const handlePhotoUpload = usePhotoUpload();

  const mutation = useMutation({
    mutationFn: (data: EditEventData) => axiosSecure.post("/edit-event", data),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setUploading(true);

    if (data.photo[0]) {
      const imgURL = await handlePhotoUpload(data.photo[0], photoURL);

      const updatedData = {
        updatedEvent: { ...data, photo: imgURL, updatedAt: new Date() },
        eventID,
        email: user?.email,
      };
      mutation.mutate(updatedData);
    } else {
      const updatedData = {
        updatedEvent: { ...data, photo: myEvent?.photo, updatedAt: new Date() },
        eventID,
        email: user?.email,
      };

      mutation.mutate(updatedData);
    }

    setUploading(false);
    refetch();
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  mutation.isSuccess &&
    !uploading &&
    successAlert("Success", "Event updated successfully.");

  return (
    <div className="primary-width min-h-screen flex items-center justify-center mt-4 mx-auto">
      <PageTitle title="Edit" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-md mx-auto w-full px-8 py-16 space-y-4 dark:bg-background2 rounded-md shadow-md"
      >
        <h1 className="text-center text-2xl md:text-3xl text-primary font-bold">
          Edit event
        </h1>
        <label className="form-control w-full">
          <input
            type="text"
            defaultValue={myEvent?.title}
            placeholder="Event title"
            {...register("title", { required: true })}
            className="input dark:bg-background2 bg-background focus:border-common text-secondary border-common rounded-md input-sm w-full"
          />
        </label>
        <label className="form-control w-full">
          <textarea
            placeholder="Event description"
            defaultValue={myEvent?.description}
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
              defaultValue={myEvent?.participant}
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
              defaultValue={myEvent?.category}
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
              defaultValue={myEvent?.location}
              className="input border-common dark:bg-background2 text-secondary rounded-md bg-background file-input-sm w-full"
              {...register("location", { required: true })}
            />
          </label>
          <label className="form-control w-full">
            <input
              {...register("date", { required: true })}
              type="date"
              defaultValue={formatDate(myEvent?.date)}
              className="input border-common dark:bg-background2 text-secondary rounded-md bg-background file-input-sm w-full"
            />
          </label>
        </div>
        {uploading || mutation.isPending ? (
          <button className="primary-btn outline-btn w-full cursor-not-allowed flex items-center justify-center gap-1">
            <span className="loading loading-spinner loading-xs"></span>
            Loading
          </button>
        ) : (
          <button className="primary-btn outline-btn w-full">Save Event</button>
        )}
      </form>
    </div>
  );
};

export default EditEventPage;
