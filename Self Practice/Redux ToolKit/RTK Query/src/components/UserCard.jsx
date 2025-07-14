import { Link } from "react-router-dom";
import { FaPenFancy, FaTrash } from "react-icons/fa6";
import { useDeleteUserMutation } from "../rtk/userAPI";

const UserCard = ({ id, name, job, email, gender, maritalStatus }) => {
  let title = "";
  if (maritalStatus === "single" && gender === "male") {
    title = "Ms.";
  } else if (maritalStatus !== "single" && gender === "male") {
    title = "Mr.";
  } else if (maritalStatus === "single" && gender === "female") {
    title = "Miss.";
  } else if (maritalStatus !== "single" && gender === "female") {
    title = "Mrs.";
  } else {
    title = "";
  }

  const [deleteUser] = useDeleteUserMutation();

  return (
    <div className="rounded p-3 border">
      <h3>
        {title} {name}
      </h3>
      <p>{email}</p>
      <p>{job}</p>

      <div className="flex gap-3 my-2">
        <button
          className="py-1.5 px-3 border rounded bg-red-400 text-white cursor-pointer hover:bg-red-600"
          onClick={() => deleteUser(id)}
        >
          <FaTrash />
        </button>
        <Link
          to={`/edit/${id}`}
          className="py-1.5 px-3 border rounded bg-green-400 text-white cursor-pointer hover:bg-green-600"
        >
          <FaPenFancy />
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
