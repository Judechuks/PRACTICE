import React from 'react'
import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";

export const StockOverview = () => {
  return (
    <div>
      <AutoComplete />
      <StockList />
    </div>
  )
}