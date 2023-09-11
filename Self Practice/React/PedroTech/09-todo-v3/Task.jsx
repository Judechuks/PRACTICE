import React from "react"

function Task(props){
  return (
    <div className='taskItem'>
      <p className='key'>{props.id}.</p><p className='task' style={{backgroundColor: props.completed ? "green" : "#333"}}>{props.taskName}</p> {/*list id*/}
      <button onClick={() => props.deleteTask(props.id)} className='deleteBtn'>X</button>
      <button onClick={() => props.completedTask(props.id)} className='completeBtn'>✓</button>
    </div>
  )
}

export default Task