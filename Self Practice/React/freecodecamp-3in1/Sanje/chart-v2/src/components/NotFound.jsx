import React from 'react'
import {FaInfoCircle} from 'react-icons/fa'


export const NotFound = () => {
  return (
    <header className='md:w-1/2 h-[65vh] mx-auto bg-white text-red-600 shadow-md rounded-lg text-center my-12 p-10'>
      <FaInfoCircle className='text-8xl mx-auto mb-4'/>
      <h1 className='text-5xl'>404</h1>
      <h1 className='text-5xl mt-4'>Page Not Found</h1>
    </header>
  )
}