import React, {useState} from 'react'
import {login, logout} from '../Store'
import {useDispatch, useSelector} from 'react-redux'

function Login() {
  const [newUsername, setNewUsername] = useState("")

  const dispatch = useDispatch()
  const username = useSelector((state: any ) => state.user.value.username)

  return (
    <main>
      <h1>{username}</h1>
      <div className='input-group'>
        <input placeholder='Username' onChange={(e) => {
          setNewUsername(e.target.value)
        }}/>
        <button className='btn' 
          onClick={() => dispatch(login({username: newUsername}))}>
          Login
        </button>
        <button className='btn' onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </main>
  )
}
export default Login