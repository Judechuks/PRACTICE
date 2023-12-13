import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { People } from "./components/People";
import { Person } from "./components/Person";
import Nav from "./components/Nav";
import { NotFound } from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
