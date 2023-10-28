import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import finnHub from '../apis/finnHub'
import { StockChart } from "../components/StockChart";
import { StockData } from "../components/StockData";

const formatData = (data) => {
  return data.t.map((item, index) => {
    return {
      x: item * 1000, //timestamp
      y: Math.floor(data.c[index]), //to remove decimal points from price
    }
  })
}

export const StockDetails = () => {
  const [chartData, setChartData] = useState()
  const {symbol} = useParams() // symbol destructured from the navigate
  useEffect(() => {
    const fetchData = async () => {
      const date = new Date()
      const currentTime = Math.floor(date.getTime()/1000) // ms to s
      let oneDay;
      if (date.getDay === 6) { // on a saturday
        oneDay = currentTime - (60 * 60 * 24 * 2) // previous 2 days market
      } else if (date.getDay === 0) { // on a sunday
        oneDay = currentTime - (60 * 60 * 24 * 3) // previous 3 days market
      } else {
        oneDay = currentTime - (60 * 60 * 24) // for one day
      }
      const oneWeek = currentTime - (60 * 60 * 24 * 7) // for one week
      const oneYear = currentTime - (60 * 60 * 24 * 365) // for one year
      try {
        const responses = await Promise.all([
          finnHub.get("stock/candle", {
            params: {
              symbol,
              from: oneDay,
              to: currentTime,
              resolution: 30
          }
          }),
          finnHub.get("stock/candle", {
            params: {
              symbol,
              from: oneWeek,
              to: currentTime,
              resolution: 60 // every hour
          }
          }),
          finnHub.get("stock/candle", {
            params: {
              symbol,
              from: oneYear,
              to: currentTime,
              resolution: "W" // everyweek, "D" everyday
          }
          })
        ])
        setChartData({
          day: formatData(responses[0].data),
          week: formatData(responses[1].data),
          year: formatData(responses[2].data),
        })
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData()
  }, [symbol])
  return (
    <div>
      { chartData && (
      <div>
        <StockChart chartData={chartData} symbol={symbol} />
        <StockData symbol={symbol} />
      </div>
      )}
    </div>
  )
}