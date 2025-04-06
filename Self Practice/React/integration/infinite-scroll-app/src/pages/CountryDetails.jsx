import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CountryDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["countries", id],
    queryFn: () => axios.get(`http://localhost:4000/countries/${id}`),
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
    <main className="details-page">
      <h2 className="main-title">Country Details</h2>
      <article className="item">
        <h2 className="country-name">{data.data.name}</h2>
        <div className="col">
          <p>
            <strong>Continent:</strong> {data.data.continent}
          </p>
          <p>
            <strong>Capital:</strong> {data.data.capital}
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Country code:</strong> +{data.data.phone}
          </p>
          <p>
            <strong>Population:</strong> {data.data.population.toLocaleString()}
          </p>
        </div>
        <div className="col">
          <ul>
            <p>
              <strong>Currency:</strong>
              {data.data.currency.length > 1
                ? data.data.currency.map((language) => {
                    return <li key={language}>{language}</li>;
                  })
                : data.data.currency}
            </p>
          </ul>
          <ul>
            <p>
              <strong>Languages:</strong>
            </p>
            {data.data.languages.map((language) => {
              return <li key={language}>{language}</li>;
            })}
          </ul>
        </div>
      </article>
    </main>
  );
};

export default CountryDetails;
