import { useEffect, useState } from "react";
import { client } from "../client";
import { useGlobalContext } from "../context";
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Search = () => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);
  const { searchTerm, setSearchTerm } = useGlobalContext();

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());
      // fetch the pins based on search terms
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      // show the pins of all categories and all search terms
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [searchTerm]);

  if (loading) {
    return <Spinner message="Searching for Pins..." />;
  }

  return (
    <div>
      {/* {loading && <Spinner message="Searching for Pins..." />} */}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && searchTerm !== "" && !loading && (
        <div className="mt-10 text-center text-xl font-semibold">
          No Pins Found!
        </div>
      )}
    </div>
  );
};
export default Search;
