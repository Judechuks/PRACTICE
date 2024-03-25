import { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import {
  userCreatedPinsQuery,
  userQuery,
  userSavedPinsQuery,
} from "../utils/data";
import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const randomImage =
  "https://source.unsplash.com/1600x900/?nature,photography,technology";

const activeBtnStyles =
  "bg-red-500 text-white font-bold px-4 py-1 rounded-full w-fit outline-1 outline-red-500";

const notActiveBtnStyles =
  "bg-primary mr-4 text-black font-bold px-4 py-1 rounded-full w-fit outline-1 outline-red-500";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null);
  const [text, setText] = useState("created");
  const [activeBtn, setActiveBtn] = useState("created");
  const navigate = useNavigate();
  const { userId } = useParams();

  // fetch user
  useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => setUser(data[0]));
  }, [userId]);

  // fetch saved posts and created posts
  useEffect(() => {
    if (text === "created") {
      const createdPinsQuery = userCreatedPinsQuery(userId);
      client.fetch(createdPinsQuery).then((data) => setPins(data));
    } else {
      const savedPinsQuery = userSavedPinsQuery(userId);
      client.fetch(savedPinsQuery).then((data) => setPins(data));
    }
  }, [text, userId]);

  if (!user) {
    return <Spinner message="Loading Profile" />;
  }

  // log out function to log the user out of google
  const logOut = () => {
    googleLogout();
    localStorage.removeItem("@shareme_user");
    navigate("/login");
  };

  return (
    <div className="relative pb-2 h-full justify-center items-center">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <div className="flex flex-col justify-center items-center">
            <img
              src={randomImage}
              alt="banner pictures"
              className="w-full h-370 2xl:510 shadow-lg object-cover"
            />
            <img
              src={user.image}
              alt="user pic"
              className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
            />
            <h1 className="font-bold text-3xl text-center mt-3">
              {user.userName}
            </h1>
            {/* log out button */}
            <div className="absolute top-0 z-1 right-0 p-2">
              {userId === user._id && (
                <button
                  type="button"
                  className="flex gap-2 items-center text-red-500 bg-white hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer shadow-md outline-none"
                  onClick={logOut}>
                  <AiOutlineLogout />
                  Log out
                </button>
              )}
            </div>
          </div>
          {/* created and saved btn */}
          <div className="text-center mt-5 mb-7">
            <button
              type="button"
              onClick={(e) => {
                setText(e.target.textContent);
                setActiveBtn("created");
              }}
              className={`capitalize ${
                activeBtn === "created" ? activeBtnStyles : notActiveBtnStyles
              }`}>
              created
            </button>
            <button
              type="button"
              onClick={(e) => {
                setText(e.target.textContent);
                setActiveBtn("saved");
              }}
              className={`capitalize ${
                activeBtn === "saved" ? activeBtnStyles : notActiveBtnStyles
              }`}>
              saved
            </button>
          </div>
          {/* saved and created pins by user */}
          {pins?.length ? (
            <div className="px-2">
              <MasonryLayout pins={pins} />
            </div>
          ) : (
            <div className="mt-2 text-center text-xl font-semibold capitalize">
              {user.userName} have no pin {text} yet!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
