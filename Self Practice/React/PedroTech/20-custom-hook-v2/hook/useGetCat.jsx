import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

function useGetCat() {
  const {data, refetch, isLoading: isCatLoading, error} = useQuery(["cat"], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
  })

  const refetchData = () => {
    alert("DATA REFETCHED!")
    refetch()
  }

  return {data, refetchData, isCatLoading, error}
}
 
export default useGetCat 