import React, { Component } from "react"
import TodoItem from "./components/TodoItem"
import TodoList from "./components/TodoList"

class App extends Component{
  constructor(){
    super()
    this.state = {
      todos: TodoList
    }
  }
  render() {
  const TodoComponent = this.state.todos.map(item => <TodoItem key={item.id} list={item} />)
    return (
      <div className="">
        {TodoComponent}
      </div>
    )
  }
}
  
export default App