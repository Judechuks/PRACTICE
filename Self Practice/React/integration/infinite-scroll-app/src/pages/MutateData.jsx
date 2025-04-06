import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const pageLimit = 4;

const fetchCountries = ({ pageParam }) => {
  return axios.get(
    `http://localhost:4000/cities?_page=${pageParam}&_per_page=${pageLimit}`
  );
};

const MutateData = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["countries"],
      queryFn: fetchCountries,
      initialPageParam: 1, // initial page to load
      getNextPageParam: (_lastPage, allPages) => {
        // console.log("All pages", allPages);
        // console.log("All pages Data", allPages[allPages.length - 1].data.next);

        // If your api does not provide the next page value, Then You will have to calculate the next page number from the the pages that your data amounts to. For example if the total data is 200 and your limit or per page is 5, then your number of pages would be 200/5 = 40

        // When your api does not return the next page
        /* if (allPages.length < 5) {
        // where 5 is the total number of pages you data amounted to.
        return allPages.length + 1;
      } else {
        return undefined;
      } */

        // Since json-server version '^1.0.0-beta.3' returns the next page, then all I have to do is return the next page
        return allPages[allPages.length - 1].data.next;
      },
      staleTime: 60000,
      refetchOnWindowFocus: false,
    });

  if (isLoading) {
    return (
      <main className="home-main">
        <div className="msg-container">
          <p className="notify-msg">Loading...</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="home-main">
        <div className="msg-container">
          <h3 className="notify-heading error-msg">Oppss!</h3>
          <p className="notify-msg">
            Error: {error ? error.message : "Could not fetch data"}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h2 className="main-title">Mutate And Fetch On Click</h2>
      {data?.pages.map((page) => {
        return page?.data?.data.map((city) => {
          return (
            <article key={city.id} className="item cursor-pointer">
              <h2 className="country-name">City: {city.name}</h2>
              <div className="row">
                <p>
                  <strong>Country:</strong> {city.country}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {city.population.toLocaleString()}
                </p>
              </div>
            </article>
          );
        });
      })}

      {/* Click to fetch */}
      <div className="click-btn-container">
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          {hasNextPage ? "Load More..." : "No More Country to Fetch"}
        </button>
      </div>
    </main>
  );
};

export default MutateData;
