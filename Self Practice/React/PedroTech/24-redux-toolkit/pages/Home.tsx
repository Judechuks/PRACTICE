import React from 'react'
import {useSelector} from 'react-redux'

function Home() {
  const username = useSelector((state: any ) => state.user.value.username)
  
  return (
    <main>
      <h1>THIS IS THE <b className="font-extrabold">HOME</b> PAGE</h1>
      {username && <h1>Welcome {username}!</h1>}
    </main>
  )
}
export default Home 