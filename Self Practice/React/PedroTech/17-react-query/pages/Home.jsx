import { useQuery } from "@tanstack/react-query"
import Axios from 'axios'

function Home() {
  const {data: catData, isLoading, isError, refetch} = useQuery(["cat"], () => {
    // you can rename the data by using data: catData,
    return Axios.get('https://catfact.ninja/fact').then((response) => response.data)
  }) 
  // ["cat"] is the unique id for the query for future use or caching

  if (isError) {
    return <h1>Sorry, there was an error</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <main>
      <h1>THIS IS THE <b className="font-extrabold">HOME</b> PAGE</h1>
      <h3 className="text-2xl">{catData?.fact}</h3> 
      {/*the data?.fact means it should get the fact only when the data returned value is not null */}
      <button onClick={refetch} className="btn mt-3">Update Data</button>
    </main>
  )
}
export default Home 