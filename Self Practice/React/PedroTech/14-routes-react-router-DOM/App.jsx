import React from 'react'
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
/*
When using react-router-dom, you need to install it. 
If your react server is already running, then open a new terminal separate
from the current one running your react app.
In that new terminal, type the following code:
npm install react-router-dom
create pages folder where all your pages will reside.
import the BrowserRouter, Routes, Route and Link from the react-router-dom
to be able to use them, see the pages files and the examples used there.
You can create your navbar directly on top of the routes component, or you can
create a navbar component and add it directly on top of the routes component
*/ 
function App() {
  
  return (
    <div>
      <Router>
        {/*<nav><Link>Home</Link> <Link>About</Link> <Link>Contact</Link></nav> The navbar created here*/}
        <Navbar /> {/*The navbar as a component*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> {/*The 404 page which you will create as a component*/}
        </Routes>
      </Router>
    </div>
  )
}

export default App 