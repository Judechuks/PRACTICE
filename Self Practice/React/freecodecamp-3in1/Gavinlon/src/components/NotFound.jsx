import React from 'react'
import {FaInfoCircle} from 'react-icons/fa'


function NotFound() {
  return (
    <header className='md:w-1/2 md:mx-auto h-[60vh] mx-3 bg-white text-red-600 shadow-sm rounded-lg text-center my-12 p-10'>
      <FaInfoCircle className='text-8xl mx-auto mb-4'/>
      <h1 className='text-5xl'>404</h1>
      <h1 className='text-6xl'>Page Not Found</h1>
    </header>
  )
}

export default NotFound