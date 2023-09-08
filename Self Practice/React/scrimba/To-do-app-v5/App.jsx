import React, { Component } from "react"
import TodoItem from "./components/TodoItem"
import TodoList from "./components/TodoList"

class App extends Component{
  constructor(){
    super()
    this.state = {
      todos: TodoList
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
  const TodoComponent = this.state.todos.map(item => <TodoItem key={item.id} list={item} handleChange={this.handleChange}/>)
    return (
      <div className="">
        {TodoComponent}
      </div>
    )
  }
}
  
export default App