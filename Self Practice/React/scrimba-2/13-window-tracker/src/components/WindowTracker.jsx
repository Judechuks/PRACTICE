import React, { useState, useEffect} from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", function() {
      setWindowWidth(window.innerWidth);
    })
  }, []) 
  return (
    <div className="">
      <h2>Window width: {windowWidth}</h2>
    </div>
  )
}