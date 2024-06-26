import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return (
      <Spinner
        message={`We are adding new ${
          categoryId === undefined ? "all" : categoryId
        } ideas to your feed!`}
      />
    );

  if (!pins?.length)
    return (
      <h2 className="mt-5 font-semibold text-xl text-center">
        There is currently no pin in this category
      </h2>
    );

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};
export default Feed;
