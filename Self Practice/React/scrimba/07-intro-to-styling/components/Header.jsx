import React from "react"

function Header(){
  return (
    <header className="header flex justify-between items-center p-4">
      <img src="./src/assets/react.svg" alt="logo" />
      <nav className="flex gap-5">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  )
}

export default Header