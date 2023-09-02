import React from "react"

function Joke(props){
  return (
    <div className="">
      <h3 className="before:content-['\003F'] before:text-2xl" style={{display: props.question ? "block" : "none", color: "#3c3"}}>Question: {props.joke.question}</h3>
      <h3 className="before:content-['\2714']" style={{color: "#33c"}}>Answer: {props.joke.punchLine}</h3>
    </div>
  )
}
/*
  You can style an element based on a condition, if that condition is met. as seen above
  You can also use style={{display: !props.question && "none"}}
  in place of style={{display: props.question ? "block" : "none"}}
*/ 

export default Joke