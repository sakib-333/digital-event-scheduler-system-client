import { GoogleGenAI } from "@google/genai";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import Markdown from "react-markdown";
import PageTitle from "../../Components/PageTitle/PageTitle";

type Inputs = {
  message: string;
};

const AskAlicePage = () => {
  const [chat, setChat] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setLoading(true);
    const { message } = data;
    setChat((prev) => [...prev, message]);
    reset();

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message,
    });
    setChat((prev) => [...prev, response.text || "No response found"]);
    setLoading(false);
  };

  return (
    <div className="primary-width mt-4 max-w-screen-lg mx-auto">
      <PageTitle title="Ask Alice" />
      <div className="mb-4 space-y-3 text-primary">
        {chat.map((c, indx) => (
          <p
            key={Math.random()}
            className={`${
              indx % 2 ? "text-left" : "text-right"
            } p-2 rounded-lg border-common`}
          >
            <Markdown>{c}</Markdown>
          </p>
        ))}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex items-end justify-center gap-4 bottom-10"
      >
        <input
          type="text"
          {...register("message", { required: true })}
          placeholder="Hi! Ask me what do you need?"
          className="input bg-background border-common input-sm w-full"
        />
        {loading ? (
          <button
            disabled
            className="cursor-not-allowed primary-btn btn-sm outline-btn"
          >
            <span className="loading loading-spinner loading-xs"></span>
          </button>
        ) : (
          <button className="primary-btn btn-sm outline-btn">
            <IoIosSend />
          </button>
        )}
      </form>
    </div>
  );
};

export default AskAlicePage;
