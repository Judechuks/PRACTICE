import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { client } from "../client";
import Spinner from "./Spinner";
import { categories } from "../utils/data";

const CreatePin = ({ user }) => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [destination, setDestination] = useState("");
  const [fields, setFields] = useState(null);
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [loading, setLoading] = useState(false);
  const [wrongImageType, setWrongImageType] = useState(false);

  const navigate = useNavigate();

  // upload image
  const uploadImage = (e) => {
    const { type, name } = e.target.files[0];
    if (
      type === "image/png" ||
      type === "image/svg" ||
      type === "image/gif" ||
      type === "image/jpeg" ||
      type === "image/tiff"
    ) {
      setWrongImageType(false);
      setLoading(true);
      // sending images to sanity CMS
      client.assets
        .upload("image", e.target.files[0], {
          contentType: type,
          filename: name,
        })
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => console.log("Image Upload Error", error));
    } else {
      setWrongImageType(true);
    }
  };

  // save pin
  const savePin = () => {
    if (title && about && destination && imageAsset?._id && category) {
      const doc = {
        _type: "pin",
        title,
        about,
        destination,
        image: {
          _type: "image",
          asset: { _type: "reference", _ref: imageAsset?._id },
        },
        userId: user._id,
        postedBy: { _type: "postedBy", _ref: user._id },
        category,
      };
      // sending document to sanity CMS
      client.create(doc).then(() => {
        navigate("/");
      });
    } else {
      setFields(true);
      setTimeout(() => {
        setFields(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-5 lg:h-4/5">
      <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full">
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
          <div className="flex flex-col justify-center items-center border-2 border-dotted border-gray-300 p-3 w-full h-420">
            {loading && <Spinner />}
            {wrongImageType && <p className="">Wrong image type</p>}
            {!imageAsset ? (
              <label className="cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-3xl">
                      <AiOutlineCloudUpload />
                    </p>
                    <p className="font-bold text-lg">Click to upload</p>
                  </div>
                  <p className="mt-24 text-gray-400 text-center">
                    Use high-quality JPG, SVG, PNG, GIF or TIFF less than 20 MB
                  </p>
                </div>
                <input
                  type="file"
                  name="upload-image"
                  onChange={uploadImage}
                  className="w-0 h-0"
                />
              </label>
            ) : (
              <div className="relative h-full">
                <img
                  src={imageAsset?.url}
                  alt="uploaded image"
                  className="size-full"
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                  onClick={() => setImageAsset(null)}>
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Input Info */}
        <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add your title"
            className="outline-none text-xl sm:text-2xl font-bold border-b-2 border-gray-200 p-2"
          />
          {user && (
            <div className="flex gap-2 my-2 items-center bg-white rounded-lg">
              <img
                src={user?.image}
                alt="user profile"
                className="size-10 rounded-full"
              />
              <p className="font-bold">{user.userName}</p>
            </div>
          )}
          {/* About */}
          <input
            type="text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="What is your pin about"
            className="outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2"
          />
          {/* Destination */}
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Add a destination link"
            className="outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2"
          />
          {/* Pin Category */}
          <div className="flex flex-col">
            <div>
              <p className="mb-2 font-semibold text-lg sm:text-xl">
                Choose Pin Category
              </p>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer">
                <option value="other" className="bg-white">
                  Select Category
                </option>
                {categories.map((category) => (
                  <option
                    key={category.name}
                    className="text-base border-0 outline-none capitalize bg-white text-black"
                    value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              {/* save button */}
              <div className="flex justify-end items-end mt-5">
                <button
                  type="button"
                  onClick={savePin}
                  className="bg-red-500 hover:bg-red-800 text-white font-bold p-2 rounded-full w-28 outline-none">
                  Save Pin
                </button>
              </div>
              <p className="text-red-500 mt-2 text-xl transition-all duration-150 ease-in text-center">
                {fields && "Please fill in all the fields"} &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePin;
