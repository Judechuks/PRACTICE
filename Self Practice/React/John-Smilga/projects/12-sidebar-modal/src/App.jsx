import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { Home } from "./components/Home";
import Modal from "./components/Modal";

export default function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}
