import { useMutation } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxios/useAxiosSecure";

interface mutateProps {
  pathname: string;
  data: any;
}

const useDataSend = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { isPending, isSuccess, mutate } = useMutation({
    mutationFn: async ({ pathname, data }: mutateProps) => {
      await axiosSecure.post(`/${pathname}`, {
        email: user?.email,
        ...data,
      });
    },
  });
  return { isPending, isSuccess, mutate };
};

export default useDataSend;
