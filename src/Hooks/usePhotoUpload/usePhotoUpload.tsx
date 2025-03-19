import axios from "axios";

const usePhotoUpload = () => {
  const handlePhotoUpload = async (image: string, defaultPhoto: string) => {
    const formData = new FormData();
    formData.append("image", image);
    const api_key = import.meta.env.VITE_IMGBB_API_KEY;

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${api_key}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        return res.data.data.url;
      }
    } catch {
      return (
        defaultPhoto || "https://i.ibb.co.com/FLWX4bfj/Event-Default-Logo.png"
      );
    }
  };

  return handlePhotoUpload;
};

export default usePhotoUpload;
