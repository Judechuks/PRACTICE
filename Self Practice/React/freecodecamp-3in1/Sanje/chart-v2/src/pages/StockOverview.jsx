import React from 'react'
import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import logo from '../assets/Logo.png'

export const StockOverview = () => {
  return (
    <div className=''>
      <div className='brand'>
        <img src={logo} alt="logo" />
        <h1 className='text-4xl fw-bold'>Jay Xchange</h1>
        <p className='fw-bold mt-2'>Trading feels better</p>
      </div>
      <AutoComplete />
      <StockList />
    </div>
  )
}