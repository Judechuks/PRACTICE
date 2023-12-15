import React, { useState } from "react";
import { ContextProvider } from "./context/context";
import Tours from "./components/Tours";

export default function App() {
  return (
    <>
      <ContextProvider>
        <Tours />
      </ContextProvider>
    </>
  );
}
