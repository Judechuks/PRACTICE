import { useQuery } from "@tanstack/react-query";

function Home() {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      return fetch("https://catfact.ninja/fact").then((res) => res.json());
    },
  });
  //The useQuery hook is used to get data from an API

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: Couldn't fetch facts.</h1>;
  }

  return (
    <main>
      <h1>
        THIS IS THE <b className="font-extrabold">HOME</b> PAGE
      </h1>
      <h3 className="text-2xl">{catData?.fact}</h3>
      {/*the data?.fact means it should get the fact only when the data returned value is not null */}
      <button onClick={refetch} className="btn mt-3">
        Update Data
      </button>
    </main>
  );
}
export default Home;
