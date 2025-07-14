import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserQuery, useUpdateUserMutation } from "../rtk/userAPI";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    id: id,
    name: "",
    email: "",
    gender: "",
    maritalStatus: "",
    job: "",
  });
  const { data: fetchedUser } = useGetUserQuery(id);

  useEffect(() => {
    if (fetchedUser) {
      setUser({
        ...fetchedUser,
        name: fetchedUser.name,
        email: fetchedUser.email,
        gender: fetchedUser.gender,
        maritalStatus: fetchedUser.maritalStatus,
        job: fetchedUser.job,
      });
    }
  }, [fetchedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [updateUser] = useUpdateUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto py-6 px-4">
      <div className="">
        <h2 className="font-semibold text-xl">Edit User</h2>
      </div>
      <article className="w-full my-4 flex gap-3 items-center flex-col min-[560px]:flex-row">
        <div className="w-full">
          <label htmlFor="name" className="cursor-pointer">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            className="w-full mt-1 py-1.5 px-2 border rounded border-blue-600 outline-none focus:ring-1 focus:ring-blue-600"
            value={user?.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="cursor-pointer">
            Email:
          </label>
          <input
            type="email"
            placeholder="user@email.com"
            id="email"
            name="email"
            className="w-full mt-1 py-1.5 px-2 border rounded border-blue-600 outline-none focus:ring-1 focus:ring-blue-600"
            value={user?.email}
            onChange={handleChange}
          />
        </div>
      </article>
      <article className="w-full my-4 flex gap-3 items-center flex-col min-[560px]:flex-row">
        <div className="w-full">
          <label htmlFor="gender" className="cursor-pointer">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            className="w-full mt-1 py-1.5 px-2 border rounded border-blue-600 outline-none focus:ring-1 focus:ring-blue-600"
            value={user?.gender}
            onChange={handleChange}
          >
            <option value=""> -- Select Gender -- </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="maritalStatus" className="cursor-pointer">
            Marital Status:
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            className="w-full mt-1 py-1.5 px-2 border rounded border-blue-600 outline-none focus:ring-1 focus:ring-blue-600"
            value={user?.maritalStatus}
            onChange={handleChange}
          >
            <option value=""> -- Select Marital Status -- </option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
      </article>
      <article className="w-full my-4 flex gap-3 items-center flex-col min-[560px]:flex-row">
        <div className="w-full">
          <label htmlFor="job" className="cursor-pointer">
            Occupation:
          </label>
          <select
            id="job"
            name="job"
            className="w-full mt-1 py-1.5 px-2 border rounded border-blue-600 outline-none focus:ring-1 focus:ring-blue-600"
            value={user?.job}
            onChange={handleChange}
          >
            <option value=""> -- Select Occupation -- </option>
            <option value="Software Developer">Software Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Product Designer">Product Designer</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Cloud Engineer">Cloud Engineer</option>
            <option value="Devops Engineer">Devops Engineer</option>
            <option value="Database Administrator">
              Database Administrator
            </option>
            <option value="Tester">Tester</option>
          </select>
        </div>
      </article>
      <div className="my-4 flex justify-end">
        <button
          type="submit"
          className="py-1.5 px-5 border rounded bg-blue-600 text-white cursor-pointer hover:bg-blue-800"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default EditUser;
