import React from 'react'
import Planets from './Planets'

function App() {
  const planets = [
    { name: "Mercury", moon: 0, isGasPlanet: false },
    { name: "Venus", moon: 0, isGasPlanet: false },
    { name: "Earth", moon: 1, isGasPlanet: false },
    { name: "Mars", moon: 2, isGasPlanet: false },
    { name: "Jupitar", moon: 95, isGasPlanet: true },
    { name: "Saturn", moon: 146, isGasPlanet: true },
    { name: "Uranus", moon: 27, isGasPlanet: true },
    { name: "Neptune", moon: 14, isGasPlanet: true }
  ]
  return ( 
    <div>
      {
        planets.map((planet, key) => {
        if (planet.isGasPlanet)
          return <Planets name={planet.name} moon={planet.moon} key={key}/>
        })
      /*
      Alternatively, we can use the following without the return keyword:
      planets.map((planet, key) => planet.isGasPlanet && <Planets name={planet.name} moon={planet.moon} key={key})/>
      OR
      planets.map((planet, key) => planet.isGasPlanet ? <Planets name={planet.name} moon={planet.moon} key={key}/> : null)
      */
      }
    </div>
  )
}

export default App 