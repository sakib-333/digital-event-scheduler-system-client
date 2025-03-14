import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useAuth from "../../Hooks/useAuth/useAuth";
import defaultUser from "/defaultUser.svg";
import useAxiosSecure from "../../Hooks/useAxios/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const MyProfilePage = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosSecure();
  const { data: myInfo = {}, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.post("/user", { email: user?.email });
      return res.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <PageTitle title={"My Profile"} />
      <div className="primary-width mt-4 sm:mt-6 md:mt-8 lg:mt-10 mx-auto flex flex-col items-center justify-center">
        <div className="max-w-screen-sm w-full p-4 dark:bg-background2 rounded shadow-md">
          <div className="text-center flex flex-col items-center justify-center">
            <img
              className="w-32 h-32 rounded-full"
              src={user?.photoURL || defaultUser}
              alt="profile"
            />
            <p className="text-xs text-secondary capitalize">
              {myInfo.userType}
            </p>
            <h1 className="text-primary">{user?.displayName}</h1>
            <p className="text-xs text-secondary">{user?.email}</p>
          </div>
          <div className="overflow-x-auto w-full mt-4">
            <h1 className="text-center text-primary">Post History</h1>
            <table className="table text-secondary text-center border-none">
              <thead className="text-secondary">
                <tr className="border-none">
                  <th>Total</th>
                  <th>Approved</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody className="border-none">
                <tr className="border-none">
                  <td>{myInfo.totalPosts}</td>
                  <td>{myInfo.approved}</td>
                  <td>{myInfo.totalPosts - myInfo.approved}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
