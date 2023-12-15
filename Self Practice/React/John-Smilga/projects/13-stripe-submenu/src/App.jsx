import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Submenu from "./components/Submenu";

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}
