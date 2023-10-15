import React, {useEffect, useState} from 'react';
import Die from './components/Die';
import Winner from './components/Winner';
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice ())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      // console.log("You won!");
    }
  }, [dice])

  // Generating random dice with values from 1 to 6
  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid() // generating a random id from react-nanoid
      }
  }

  // Creating 10 of those random dice in an array
  function allNewDice () {
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    if (!tenzies) { // if game is not over then you can roll dice
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die:
            generateNewDie()
    }))
    } else {
      setTenzies(false)
      setDice(allNewDice()) // restart
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  // Mapping through those 10 dice and returning the die component
  const diceElements = dice.map(die => (
    <Die value={die.value} key={die.id}
      isHeld={die.isHeld} holdDice={() => holdDice(die.id)} 
    />
  ))

  return (
    <main>
      {tenzies && <Confetti />}
      {tenzies && <Winner />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='die-container'>
        {diceElements}
      </div>
      <button className='btn' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
