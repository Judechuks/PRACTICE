import React, { useState } from 'react'

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[]; // array/list of strings
  country?: string; // error message, because it isn't included in App.tsx to ignore, add '?'
  //friends: Props[]; // You can pass a prop of object (person) as a value
}

// Enum: userdefined type, that can contain other options with fixed values 
export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France",
}

export const Person = (props: Props) => {  // converting it from 'any' to 'interface' type
  // const name: string = "Pedro" // do this in interface instead
  //const [name, setName] = useState<string>("Jude") // specifying state type using typescript
  return (
    <div className='mb-3 text-2xl'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      <p>Marital Status: {props.isMarried ? "Married" : "Single"}</p>
      <p>Friends: {props.friends.map((friend: string) => friend + " ")}</p> {/* declared to be string*/}
      {/* <p>Friends: {props.friends.map((friend) => (<p>{friend}</p>))}</p> */}
      <p>Country: {props.country}</p>
    </div>
  )
}

/* install typescript using:
 npx create-react-app . --template typescript
 (outdated)
 To use typescript to already existing vite react, use:
 npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest
 (current as at 17/Sept/2023)
 */

/*
Interface: in typescript is a way of describing the shape of an object
Interface will stand in for propType
*/  