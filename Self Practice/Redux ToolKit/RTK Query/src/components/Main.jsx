import { Toaster } from "sonner";
import Users from "./Users";
const Main = () => {
  return (
    <main className="my-5 p-4">
      <article className="font-medium mb-3">
        <h1 className="text-xl font-medium mb-3">Users</h1>
      </article>
      <article>
        <p className="text-gray-300">
          This is a simple example of using Redux Toolkit Query to fetch users
          from an API. The data is fetched and displayed in the Users component.
        </p>
        <p className="text-gray-300">
          The API is defined using createApi from Redux Toolkit Query, and the
          data is fetched using useGetUsersQuery. The loading and error states
          are handled appropriately.
        </p>
      </article>
      <article className="mt-5">
        <Users />
      </article>

      {/* Sonner - For a toast notification */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          classNames: {
            toast: "flex items-start", // Aligns items to the top
            icon: "self-start", // Ensures the icon aligns to the top
          },
          // duration: 5000, // speed of the toast before it disappears
        }}
      />
    </main>
  );
};

export default Main;
