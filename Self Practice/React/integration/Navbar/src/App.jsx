import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/reports" Component={Reports} />
          <Route path="/products" Component={Products} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
