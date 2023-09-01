import React from "react"
import Joke from "./components/Joke"

function App(){
  return (
    <div className="">
      <Joke
        punchline = "It's hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <Joke
        question = "What's the best thing about Switzerland?"
        punchline = "I don't know but the flad is a big plus!"
      />
      <Joke
        question = "Did you hear about the mathematician who's afraid of negative numbers?"
        punchline = "We'll stop at nothing to avoid them!"
      />
      <Joke
        question = "Hear about the new restaurant called karma?"
        punchline = "There's no menu: You get what you deserve."
      />
      <Joke
        question = "Did you hear about the actor who fell through the floorboards?"
        punchline = "He was just going through a stage."
      />
      <Joke
        question = "Did you hear about the claustrophobic astronaut?"
        punchline = "He just needed a little space."
      />
    </div>
  )
}
  
export default App