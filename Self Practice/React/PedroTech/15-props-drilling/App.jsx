import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Navbar from './pages/Navbar'
 
function App() {
  const [username, setUsername] = useState('Judechuks')
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username}/>} />
          <Route path="/profile" element={<Profile username={username} setUsername={setUsername} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App 
/*
But there is a pitfall to these (props drilling), because it involving passing data (variables & functions)
from an upper component(parent i.e App) to the lowest component(grandchild i.e ChangeProfile)
makes the whole process redundant. There is a better way of doing this, which is the createContext and useContext method (state mgt method)
check the next example after this.
*/ 