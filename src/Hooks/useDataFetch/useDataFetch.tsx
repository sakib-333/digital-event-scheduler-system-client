import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxios/useAxiosSecure";

const useDataFetch = (queryKey: string, route: string, fetchInfo: any) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data = [],
    isLoading,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: [queryKey, fetchInfo],
    queryFn: async () => {
      const res = await axiosSecure.post(`/${route}`, {
        email: user?.email,
        ...fetchInfo,
      });
      return res.data;
    },
    refetchOnMount: true,
  });

  return { data, isLoading, refetch, isFetching };
};

export default useDataFetch;
