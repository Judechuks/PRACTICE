import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const pageLimit = 4;

const FetchAndPaginate = () => {
  const [pageNum, setPageNum] = useState(1);

  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["countries", pageNum],
    queryFn: () => {
      return axios.get(
        `http://localhost:4000/countries?_page=${pageNum}&_per_page=${pageLimit}`
      );
    },
    staleTime: 50000,
    placeholderData: keepPreviousData,
    // enabled: true,
    // refetchInterval: 8000,
    // refetchIntervalInBackground: true,
    // refetchOnWindowFocus: true,
  });

  // console.log(data?.data);

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

  const prevPage = () => {
    setPageNum((num) => num - 1);
  };

  const NextPage = () => {
    setPageNum((num) => num + 1);
  };

  return (
    <main>
      <h2 className="main-title">Pagination</h2>
      {data?.data.data.map((item) => (
        <article
          key={item.id}
          className="item cursor-pointer"
          onClick={() => navigate(`/countries/${item.id}`)}
        >
          <h2 className="country-name">{item.name}</h2>
          <div className="row">
            <p>
              <strong>Continent:</strong> {item.continent}
            </p>
            <p>
              <strong>Capital:</strong> {item.capital}
            </p>
          </div>
          <div className="row">
            <p>
              <strong>Currency:</strong> {item.currency[0]}
            </p>
            <p>
              <strong>Country code:</strong> +{item.phone}
            </p>
          </div>
        </article>
      ))}

      {/* Pagination */}
      <div className="paginate-btn-container">
        <button
          type="button"
          className="btn prev-btn"
          onClick={prevPage}
          disabled={pageNum == 1 ? true : false}
        >
          Prev
        </button>
        <p className="page-num">{pageNum}</p>
        <button
          type="button"
          className="btn next-btn"
          onClick={NextPage}
          disabled={pageNum == data?.data.pages ? true : false}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default FetchAndPaginate;
