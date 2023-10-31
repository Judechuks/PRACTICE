import {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import finnHub from "../apis/finnHub"; // my axios
import { WatchListContext } from '../context/watchListContext';
import { Loading } from "./Loading";

export const StockList = () => {
  const [stock, setStock] = useState([])
  const [loading, setLoading] = useState(false)
  const {watchList, deleteStock} = useContext(WatchListContext) // received value destructured
  const navigate = useNavigate()

  const changeColor = (value) => {
    return value > 0 ? 'success' : 'danger'
  }

  const renderIcon = (value) => {
    return value > 0 ? <BsArrowUp className='i' /> : <BsArrowDown className='i' />
  }

  useEffect(() => {
    let isMounted = true // after the component has mounted
    const fetchData = async () => {
      setLoading(true)
      try {
        const responses = await Promise.all(watchList.map((stock) => {
          return finnHub.get("/quote", {
            params: {
              symbol: stock
            }
          })
        })) 
        // get only the 'data' and the symbol from the 'response'
        const data = responses.map((response) => { 
          return {
            data: response.data,
            symbol: response.config.params.symbol,
          }
        })
        // to prevent the setStock from being called if component is unmounted
        if (isMounted) {
          setStock(data)
        }
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false)
    }
    fetchData()

    return () => (isMounted = false)
  }, [watchList])

  const handleStockSelect = (symbol) => {
    navigate(`detail/${symbol}`)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className='container'>
      <table className='table hover mt-4'>
        <thead style={{color: "rgb(79,89,102)"}}>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Last</th>
            <th scope='col'>Chg</th>
            <th scope='col'>Chg%</th>
            <th scope='col'>High</th>
            <th scope='col'>Low</th>
            <th scope='col'>Open</th>
            <th scope='col'>Close</th>
          </tr>
        </thead>
        <tbody>
          {
            stock.map((stockData) =>{
              return (
                <tr className='table-row cursor-pointer' key={stockData.symbol} onClick={() => handleStockSelect(stockData.symbol)}>
                  <th scope='row'>{stockData.symbol}</th>
                  <td className={`text-${changeColor(stockData.data.c)}`}>{stockData.data.c}</td>
                  <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.d}{renderIcon(stockData.data.d)}</td>
                  <td className={`text-${changeColor(stockData.data.dp)}`}>{stockData.data.dp}{renderIcon(stockData.data.dp)}</td>
                  <td className={`text-${changeColor(stockData.data.h)}`}>{stockData.data.h}</td>
                  <td className={`text-${changeColor(stockData.data.l)}`}>{stockData.data.l}</td>
                  <td className={`text-${changeColor(stockData.data.o)}`}>{stockData.data.o}</td>
                  <td className={`text-${changeColor(stockData.data.pc)}`}>{stockData.data.pc} <button className='btn btn-danger btn-sm ml-3 delete-btn' onClick={(e) => {
                    e.stopPropagation() // prevents event bubbling
                    deleteStock(stockData.symbol)}
                  }>Remove</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
/*
const response = await finnHub.get("/quote?symbol=MSFT") which can be shortened as seen below
const response = await finnHub.get("/quote", {
          params: {
            symbol: "MSFT"
          }
        })
const reponses = Promise.all(request1, request2, request3, etc) is used to send a request all at once and the response will be received. Instead of sending them sequenctially i.e one after the other.
*/ 