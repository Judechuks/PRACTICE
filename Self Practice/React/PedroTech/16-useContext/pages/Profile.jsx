import { useContext } from "react"
import { AppContext } from "../App"
import ChangeProfile from '../components/ChangeProfile'

function Profile() {
  const {username, setUsername} = useContext(AppContext)

  return (
    <main>
      <h1>PROFILE</h1>
      <h2>User: {username}</h2>
      <ChangeProfile setUsername={setUsername} />
    </main>
  )
}
export default Profile