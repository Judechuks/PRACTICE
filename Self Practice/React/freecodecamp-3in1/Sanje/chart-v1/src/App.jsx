import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StockOverview } from "./pages/StockOverview";
import { StockDetails } from "./pages/StockDetails";
import { WatchListContextProvider } from './context/watchListContext';

export default function App() {


  return (
    <main className='container-fluid'>
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverview />} />
            <Route path="/detail/:symbol" element={<StockDetails />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  )
}

/*
 path="/detail/:symbol"
 The :symbol denotes that symbol is a variable. (denoted with a colon)
*/ 