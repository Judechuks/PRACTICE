import React, { useState, useEffect} from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth)
    /* cleanup function for the memory leak, because the 
    useEffect returns a callback function */
    return function() {
      window.removeEventListener("resize", watchWidth)
    }
  }, []) 
  return (
    <div className="">
      <h2>Window width: {windowWidth}</h2>
    </div>
  )
}