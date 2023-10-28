import { useState } from 'react'
import Chart from 'react-apexcharts'

export const StockChart = ({chartData, symbol}) => {
  const {day, week, year} = chartData
  const [dateFormat, setDateFormat] = useState('24h')

  // check the time picked
  const determineTimeFormat = () => {
    switch (dateFormat) {
      case '24h':
        return day
      case '7d':
        return week
      case '1y':
        return year
      default:
        return day
    }
  }

  //check chart trend then determine color (up = 'green', down = 'red')
  const first = determineTimeFormat()[0].y // first entry
  const last = determineTimeFormat()[determineTimeFormat().length - 1].y // last entry
  const color = (last - first) > 0 ? '#26C281' : '#ED3419'
  // chart styling and configurations
  const options = {
    colors: [color],
    title: {
      text: symbol, 
      align: "center",
      style: {
        fontSize: "24px"
      }
    },
    chart: {
      id: "stock data",
      animations: {
        speed: 1300
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false
      } // IP address local time
    },
    tooltip: {
      x: {
        format: "MMM dd HH:MM"
      }
    }
  }
  
  // data to be passed to the chart
  const series = [{
    name: symbol,
    data: determineTimeFormat()
  }]

  // styling the selected button
  const renderButtonSelect = (button) => {
    const classes = "btn m-1 "
    if (button === dateFormat) {
      return classes + "btn-primary"
    } else {
      return classes + "btn-outline-primary"
    }
  }

  return <div className='mt-5 p-4 shadow-sm  bg-white'>
    <Chart options={options} series={series} type="area" width="100%" />
    <div className="">
      <button className={renderButtonSelect('24h')} onClick={() => setDateFormat('24h')}>24h</button>
      <button className={renderButtonSelect('7d')} onClick={() => setDateFormat('7d')}>7d</button>
      <button className={renderButtonSelect('1y')} onClick={() => setDateFormat('1y')}>1y</button>
    </div>
  </div>
}