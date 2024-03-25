import { useState, useEffect } from "react";
import { MdDownloadForOffline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { client, urlFor } from "../client";
import MasonryLayout from "./MasonryLayout";
import { pinDetailMorePinQuery, pinDetailQuery } from "../utils/data";
import Spinner from "./Spinner";

const PinDetail = ({ user }) => {
  const [pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState("");
  const [addingComment, setAddingComment] = useState(false);
  const { pinId } = useParams();

  const addComment = () => {
    if (comment) {
      setAddingComment(true);
      client
        .patch(pinId)
        .setIfMissing({ comments: [] })
        .insert("after", "comments[-1]", [
          {
            comment,
            _key: uuidv4(),
            postedBy: { _type: "postedBy", _ref: user?._id },
          },
        ])
        .commit()
        .then(() => {
          fetchPinDetails();
          setComment("");
          setAddingComment(false);
        });
    }
  };

  const fetchPinDetails = () => {
    let query = pinDetailQuery(pinId);
    if (query) {
      client.fetch(query).then((data) => {
        // getting a particular pin
        setPinDetail(data[0]);
        if (data[0]) {
          // getting all similar pins related to this pin (category)
          query = pinDetailMorePinQuery(data[0]);
          client.fetch(query).then((res) => setPins(res));
        }
      });
    }
  };

  // useEffect calling the fetchPinDetails
  useEffect(() => {
    fetchPinDetails();
  }, [pinId]);

  // should be below the useEffect, else the spinner continues endlessly
  if (!pinDetail) {
    return <Spinner message="Loading Pin..." />;
  }

  return (
    <>
      <div
        className="flex xl:flex-row flex-col m-auto bg-white rounded-[32px]"
        style={{ maxWidth: "1500px" }}>
        {/* main post at the top */}
        <div className="flex justify-center items-center md:items-start flex-initial">
          <img
            src={pinDetail?.image && urlFor(pinDetail?.image).url()}
            alt="user post"
            className="rounded-t-3xl rounded-b-lg"
          />
        </div>
        {/* similar posts below (from same category) */}
        <div className="w-full p-5 flex-1 xl:min-w-620">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <a
                href={`${pinDetail?.image?.asset?.url}?dl=`}
                download
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none">
                <MdDownloadForOffline />
              </a>
            </div>
            <a href={pinDetail?.destination} target="_blank" rel="noreferrer">
              {pinDetail.destination}
            </a>
          </div>
          <div>
            <h1 className="font-bold text-4xl break-words mt-3">
              {pinDetail.title}
            </h1>
            <p className="mt-3">{pinDetail.about}</p>
          </div>
          <Link
            to={`/user-profile/${pinDetail.postedBy?._id}`}
            className="flex gap-2 mt-5 items-center bg-white rounded-lg">
            <img
              src={pinDetail.postedBy?.image}
              alt="user profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="font-semibold capitalize">
              {pinDetail.postedBy?.userName}
            </p>
          </Link>
          <h2 className="font-bold text-2xl mt-5">Comments:</h2>
          {/* comments */}
          <div className="max-h-370 overflow-y-auto">
            {pinDetail?.comments?.map((comment, index) => (
              <div
                key={index}
                className="flex gap-2 mt-5 items-center bg-white rounded-lg">
                <img
                  src={comment?.postedBy?.image}
                  alt="user profile"
                  className="size-10 rounded-full cursor-pointer"
                />
                <div className="flex flex-col">
                  <p className="font-bold">{comment?.postedBy?.userName}</p>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
          {/* input for comment */}
          <div className="flex flex-wrap mt-6 gap-3">
            <Link to={`/user-profile/${pinDetail.postedBy?._id}`}>
              <img
                src={pinDetail.postedBy?.image}
                alt="user profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Link>
            <input
              type="text"
              className="flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="button"
              className="bg-red-500 text-white rounded-full px-6 py-2 font-semibold text-base outline-none"
              onClick={addComment}>
              {addingComment ? "Posting the comment..." : "Post"}
            </button>
          </div>
        </div>
      </div>
      {/* Displaying all similar pins related to this pin (category) */}
      <div className="mt-10 ">
        <h2 className="text-center mb-5 text-3xl font-bold capitalize">
          Similar Pins
        </h2>
        {pins?.length > 0 ? (
          <MasonryLayout pins={pins} />
        ) : (
          <p className="text-center text-xl font-semibold">
            No more pins in this category
          </p>
        )}
      </div>
    </>
  );
};
export default PinDetail;
