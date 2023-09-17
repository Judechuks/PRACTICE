import useGetCat from "../hook/useGetCat"

export const Cat = () => {
  const {data, isCatLoading, refetchData} = useGetCat()
  
  if (isCatLoading) return <h1>Loading...</h1>

  return (
    <div>
      <button className="btn" onClick={refetchData}>Refetch</button>
      <h1>{data?.fact}</h1>
    </div>
  )
}