import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="fixed inset-0 grid place-content-center bg-[#242424] text-center">
      <h1 className="mb-2 text-8xl font-bold text-red-400">404</h1>
      <h2 className="text-xl font-semibold">Opps!</h2>
      <p className="my-4 text-red-400">Page Not found</p>
      <Link
        to={"/"}
        className="w-fit mx-auto flex items-center justify-center gap-1 text-xl py-1.5 px-4 font-semibold rounded bg-blue-500 hover:bg-blue-600"
      >
        <FaChevronLeft /> Go Back
      </Link>
    </main>
  );
};

export default NotFound;
