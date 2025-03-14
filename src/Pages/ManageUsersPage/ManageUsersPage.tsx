import PageTitle from "../../Components/PageTitle/PageTitle";

const users = [1, 2, 3, 4, 5, 6, 7, 8];

const ManageUsersPage = () => {
  return (
    <div className="primary-width mt-4 mx-auto">
      <PageTitle title="Manage Users" />
      <div className="overflow-x-auto rounded-md primary-border bg-background dark:bg-background2">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-primary">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-secondary">
            {users.map((users, indx) => (
              <tr
                className="hover:bg-background2 dark:hover:bg-background"
                key={users}
              >
                <th>{indx + 1}</th>
                <td>Sakibur Rahman</td>
                <td>sakib@gmail.com</td>
                <td>{indx % 2 ? "General" : "Admin"}</td>
                <td>
                  <button className="primary-btn outline-btn">
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsersPage;
