import { useState, useContext} from "react"
import { AppContext } from "../App"

function ChangeProfile() {
  const {setUsername} = useContext(AppContext)
  const [newUsername, setNewUsername] = useState('')

  return (
    <div className="input-group">
      <input placeholder="Enter New Username" onChange={(e) => setNewUsername(e.target.value)}/>
      <button className="btn" onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  )
}
export default ChangeProfile