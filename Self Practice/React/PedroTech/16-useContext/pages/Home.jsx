import { useContext } from "react"
import { AppContext } from "../App"

function Home() {
  const {username} = useContext(AppContext)
  return (
    <main>
      <h1>THIS IS THE <b className="font-extrabold">HOME</b> PAGE
      </h1>
      <h2>The user is: {username}</h2>
    </main>
  )
}
export default Home