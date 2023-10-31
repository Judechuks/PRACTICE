import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StockOverview } from "./pages/StockOverview";
import { StockDetails } from "./pages/StockDetails";
import { WatchListContextProvider } from './context/watchListContext';
import { NotFound } from "./components/NotFound";
import Nav from './components/Nav';

export default function App() {


  return (
    <main className=''>
      <WatchListContextProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<StockOverview />} />
            <Route path="/detail/:symbol" element={<StockDetails />} />
            <Route path="*" element={<NotFound />} />
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