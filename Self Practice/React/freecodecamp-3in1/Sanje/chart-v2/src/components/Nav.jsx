import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/Logo.png'

function Nav() {
  return (
    <nav className='nav py-2 px-4 bg-white flex justify-between items-center'>
      <a href='/'>
        <img src={logo} alt="logo" width={'40px'} />
      </a>
      <ul className='flex justify-between px-2 font-bold'>
        <li><Link className='link' to="/">Home</Link></li>
      </ul>
    </nav>
  )
}

export default Nav