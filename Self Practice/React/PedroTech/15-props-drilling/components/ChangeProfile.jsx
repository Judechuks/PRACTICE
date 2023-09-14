import { useState } from "react"

function ChangeProfile(props) {
  const [newUsername, setNewUsername] = useState('')

  return (
    <div className="input-group">
      <input placeholder="Enter New Username" onChange={(e) => setNewUsername(e.target.value)}/>
      <button className="btn" onClick={() => props.setUsername(newUsername)}>Change Username</button>
    </div>
  )
}
export default ChangeProfile
/*
But there is a pitfall to these (props drilling), because it involving passing data (variables & functions)
from an upper component(parent i.e App) to the lowest component(grandchild i.e ChangeProfile)
makes the whole process redundant. There is a better way of doing this, which is the createContext and useContext method (state mgt method)
check the next example after this.
*/ 