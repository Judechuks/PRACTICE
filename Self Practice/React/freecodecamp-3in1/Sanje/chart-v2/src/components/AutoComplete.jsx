import {useState, useEffect, useContext} from 'react'
import finnHub from '../apis/finnHub'
import { WatchListContext } from '../context/watchListContext';

export const AutoComplete = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const {addStock} = useContext(WatchListContext) // received value destructured

  const renderDropdown = () => {
    const dropDownClass = search ? 'show' : null
    return <ul className={`dropdown-menu ${dropDownClass}`} style={{
      height: "450px", width: "100%", overflowY: "scroll", overflowX: "hidden", cursor: "pointer"
    }}>
      {
        results.map((result) => {
          return (
            <li key={result.symbol} className='dropdown-item'
              onClick={() => {
                addStock(result.symbol) 
                setSearch("")
              }
            }>
              {result.description} ({result.symbol})
            </li>
          )
        })
      }
    </ul>
  }

  // Fetching data for the search box
  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/search", {
          params: {
            q: search
          }
        })
        setResults(response.data.result);
      } catch (error) {
        console.log(error.message);
      }
    }
    // Only search data when something is typed in the search box
    if (search.length > 0) {
      fetchData()
    } else {
      setResults([]) // otherwise the result should be empty
    }
    return () => (isMounted = false)
  }, [search])

  return (
    <div className='w-50 p-4 rounded mx-auto'>
      <div className="form-floating dropdown">
        <input type="text" id='search' className='form-control' style={{backgroundColor: "rgba(145, 158, 171, 0.04)"}} placeholder='Search' autoComplete='off' value={search} onChange={(e) => setSearch(e.target.value)} />
        <label htmlFor="search" className=''>Search</label>
        {renderDropdown()}
      </div>
    </div>
  )
}