import {useState} from 'react'
import Task from './Task'

function App() {
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState("")
  
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  
  const addTask = () => {
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1, // gets the id of the previous list
      taskName: newTask,
      completed: false
    }
    setList([...list, task])
  }
  
  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id))
    // goes through the list of tasks, and remove tasks with the id that matches the id of the task clicked.
  }
  
  const completedTask = (id) => {
    setList(
      list.map((task) => {
        if (task.id === id) {
          return {...task, completed: true}
        } else {
          return task
        }
      })
    )
  }

  return ( 
    <div className='taskContainer'>
      <div className='addTask'>
        <input onChange={handleChange} placeholder='Add Your Task'/>
        <button onClick={addTask} className='addBtn'>Add Task</button>
      </div>
      <div className='list'>
        {list.map((task) => {
          return <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completedTask={completedTask}/>
          })
        }
      </div>
    </div>
  )
}

export default App 