import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> // don't use strictMode because useEffect would render the fetch twice
    <App />
  // {/* </React.StrictMode> */}
) 