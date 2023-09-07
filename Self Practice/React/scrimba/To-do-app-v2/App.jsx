import React from "react"
import TodoItem from "./components/TodoItem"
import TodoList from "./components/TodoList"

function App(){
  const TodoComponent = TodoList.map(item => <TodoItem key={item.id} list={item} />)
  return (
    <div className="">
      {TodoComponent}
    </div>
  )
}
  
export default App