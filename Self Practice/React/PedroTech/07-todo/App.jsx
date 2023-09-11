import {useState} from 'react'

function App() {
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState("")
  
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  
  const addTask = () => {
    const newList = [...list, newTask]
    setList(newList)
  }
  
  const deleteTask = (taskName) => {
    setList(list.filter((task) => task !== taskName))
    // goes through the list of tasks, and remove tasks that matches the name of the task clicked.
    /*
    But there is a pitfall, if two or more tasks with the same name exist, those tasks will be deleted.
    Open the version 2 of this file to see how it was resolved. 
    */
  }

  return ( 
    <div className='taskContainer'>
      <div className='addTask'>
        <input onChange={handleChange} placeholder='Add Your Task'/>
        <button onClick={addTask} className='addBtn'>Add Task</button>
      </div>
      <div className='list'>
        {list.map((task, key) => {
          return (
          <div className='taskItem'>
            <p className='key'>{key + 1}.</p><p className='task'>{task}</p> 
            <button onClick={() => deleteTask(task)} className='deleteBtn'>X</button>
          </div> )
          })
        }
      </div>
    </div>
  )
}

export default App 