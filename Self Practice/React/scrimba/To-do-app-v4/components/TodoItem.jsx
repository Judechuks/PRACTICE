import React from "react"

function TodoItem(props){
  return (
    <div className="flex">
      <input 
        type="checkbox" 
        checked={props.list.completed}
        onChange={()=> console.log('Checked!')} 
        className="accent-blue-600"
      />
      <p style={{textDecoration: props.list.completed ? 'line-through' : 'none', color: props.list.completed ? 'red' : 'green'}}>{props.list.text}</p>
    </div>
  )
}

export default TodoItem