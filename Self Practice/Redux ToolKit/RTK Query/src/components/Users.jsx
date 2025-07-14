import { useGetUsersQuery } from "../rtk/userAPI";
import UserCard from "./UserCard";

const Users = () => {
  const { data, isLoading, isError, _isSuccess, _isFetching, error } =
    useGetUsersQuery(); // This will trigger the API call
  // You can use the result of the query to display data or handle loading/error states

  // console.log("fetched users", data);

  if (isLoading)
    return (
      <main className="fixed inset-0 grid place-content-center bg-[#242424]">
        <h1 className="font-semibold text-xl">Loading...</h1>
      </main>
    );

  if (isError)
    return (
      <main className="fixed inset-0 grid place-content-center bg-[#242424] text-center">
        <h1 className="mb-2 text-xl font-semibold">Error:</h1>
        <p className="text-red-400">{error?.error}</p>
      </main>
    );

  // if (isSuccess)
  //   return (
  //     <main className="fixed inset-0 grid place-content-center bg-[#242424] text-center">
  //       {data.map((user) => (
  //         <h1 key={user.id}>Hello</h1>
  //       ))}
  //     </main>
  //   );

  return (
    <div className="grid grid-cols-1 min-[460px]:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
