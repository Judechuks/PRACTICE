import React, { useState, createContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Navbar from './pages/Navbar'

export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState('Judechuks')
  
  return (
    <div>
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> 
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App 
/*
The useContext helps us to store data (variables and functions) that we like
to pass down to any component without having to use props (which eventually 
leads to props drilling).
After creating the component that would pass the data, then use that component to 
wrap the components that will be receiving the data (as seen in AppContext example)
the AppContext will have a '.Provider' and then any data that you want to be passed
will be passed as a value to the AppContext so that other Components can receive them
We then go to the components that needs the data (Home and Profile) and use the
'useContext' hook to pass those data to the component
*/ 