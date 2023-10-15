import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className='py-2 px-4 bg-white'>
      <ul className='flex justify-between px-2 ml-auto w-32 font-bold'>
        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link' to="/teams">Teams</Link></li>
      </ul>
    </nav>
  )
}

export default Nav