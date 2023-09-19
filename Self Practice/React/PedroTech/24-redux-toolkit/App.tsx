import React, { useState, createContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Store} from './Store'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import {Provider} from 'react-redux'

function App() {
  
  return (
    <div>
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> 
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default App 
/*
To use redux toolkit, you have to install it, by:
npm install @reduxjs/toolkit react-redux
store: is a placeholder where you group all of your global state
*/ 