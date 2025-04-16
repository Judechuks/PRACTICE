import axios from "axios";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

const pageLimit = 4;

// functions
const fetchCities = ({ pageParam }) => {
  return axios.get(
    `http://localhost:4040/cities?_page=${pageParam}&_per_page=${pageLimit}`
  );
};

const fetchCountries = () => {
  return axios.get(`http://localhost:4000/countries`);
};

const addCity = (city) => {
  return axios.post(`http://localhost:4040/citie`, city);
};

// component
const MutateData = () => {
  const [showForm, setShowForm] = useState(false);
  // const [formData, setFormData] = useState(false);

  // fetch countries
  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  // fetch cities
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["cities"],
      queryFn: fetchCities,
      initialPageParam: 1, // initial page to load
      getNextPageParam: (_lastPage, allPages) => {
        return allPages[allPages.length - 1].data.next;
      },
      // staleTime: 60000,
      refetchOnWindowFocus: false,
    });

  // queryClient from the QeryClientProvider
  const queryClient = useQueryClient();

  // mutation query
  const {
    mutate,
    isError: isMutationError,
    error: mutationError,
  } = useMutation({
    mutationFn: addCity,
    onMutate: async (newCity) => {
      await queryClient.cancelQueries(["cities"]); // to prevent overriding the data update and ensure consistent state
      const previousData = queryClient.getQueryData(["cities"]); // gets the current query data (newCity) incase mutation fails inorder to make a rollback
      // update the internal city cache with the new data that is received (newCity)
      queryClient.setQueryData(["cities"], (oldQueryData) => {
        // console.log("oldQueryData", oldQueryData);
        const obj = {
          ...oldQueryData,
          pages: oldQueryData.pages.map((page, index) => {
            if (index === oldQueryData.pages.length - 1) {
              return {
                ...page,
                data: {
                  ...page.data,
                  data: [
                    ...page.data.data,
                    { ...newCity, id: String(page.data.data.length + 1) },
                  ],
                },
              };
            }
            return page;
          }),
        };
        // console.log("Returned Obj", obj);
        return obj;
      });

      return previousData; // for rollback incase mutation fails
    },
    onError: (error, newCity, context) => {
      if (error) console.log("Error", error);
      if (newCity) console.log("Data", newCity);
      queryClient.setQueryData(["cities"], context.previousData); // rollback if there is an error
    },
  });

  // form validation using react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function handleCitySubmission(recievedData) {
    mutate({
      ...recievedData,
      population: parseInt(recievedData.population),
    });
    setShowForm(false);
    setValue("name", "");
    setValue("country", "");
    setValue("population", "");
  }

  // handle form
  /*   function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    mutate({ ...formData });

    // setFormData({});
    setShowForm(false);
  } */

  // function handleChange(event) {
  /*     let { id, value } = event.target;
    if (id === "population") {
      value = parseInt(value);
    }
    setFormData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  } */

  if (isLoading) {
    return (
      <main className="home-main">
        <div className="msg-container">
          <p className="notify-msg">Loading...</p>
        </div>
      </main>
    );
  }

  if (isError || isMutationError) {
    return (
      <main className="home-main">
        <div className="msg-container">
          <h3 className="notify-heading error-msg">Oppss!</h3>
          {isError && (
            <p className="notify-msg">
              Error: {error ? error.message : "Could not fetch data"}
            </p>
          )}
          {isMutationError && (
            <p className="notify-msg">
              Error:{" "}
              {mutationError ? mutationError.message : "Could not submit data"}
            </p>
          )}
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
            <article key={city.id} className="item">
              <h2 className="country-name">City: {city.name}</h2>
              <div className="row">
                <p>
                  <strong>Country:</strong> {city.country}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {city?.population?.toLocaleString()}
                </p>
              </div>
            </article>
          );
        });
      })}

      {/* Click to fetch */}
      <div className="click-btn-container">
        {hasNextPage ? (
          <button onClick={fetchNextPage}>Load More...</button>
        ) : (
          <button onClick={() => setShowForm(true)}>
            No More Cities Click to Add
          </button>
        )}
      </div>

      {/* Add More Cities Form */}
      {showForm && (
        <section className="form-container">
          {/* <form action="" onSubmit={handleFormSubmit}> */}
          <form action="" onSubmit={handleSubmit(handleCitySubmission)}>
            <div className="form-row">
              <div className="close-btn-container">
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => setShowForm(false)}
                >
                  x
                </button>
              </div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="name"
                placeholder="City Name"
                // onChange={handleChange}
                className={`${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                {...register("name", {
                  required: "City name is required",
                })}
              />
              {errors.name && (
                <p className="form-error-msg">{errors.name.message}!</p>
              )}
            </div>
            <div className="form-row">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                // onChange={handleChange}
                className={`cursor-pointer ${
                  errors.country ? "border-red-500" : "border-gray-300"
                }`}
                {...register("country", {
                  required: "Country is required",
                })}
              >
                <option value="">-- Select Country --</option>
                {countries?.data.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="form-error-msg">{errors.country.message}!</p>
              )}
            </div>
            <div className="form-row">
              <label htmlFor="population">Population</label>
              <input
                type="number"
                id="population"
                placeholder="Number of People"
                // onChange={handleChange}
                className={`${
                  errors.population ? "border-red-500" : "border-gray-300"
                }`}
                {...register("population", {
                  required: "Population number is required",
                })}
              />
              {errors.population && (
                <p className="form-error-msg">{errors.population.message}!</p>
              )}
            </div>
            <div className="form-row">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </section>
      )}
    </main>
  );
};

export default MutateData;
