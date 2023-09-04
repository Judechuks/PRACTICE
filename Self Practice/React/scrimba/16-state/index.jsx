import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*
state is the data that a component maintains. With state a component can change its own data.
A state is only applied to a class based component
And a constructor method should be present. And a super() method has to be invoked. which makes it possible to get some properties and data from the super/parent class (React.Component).
A   state is an object with its key and value. When passing the state to a component, it passes it as a props. And a props is immutable. i.e, it can not be changed by the receiving component. Rather, you can use the 'setState' method.
*/ 

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
) 