import ChangeProfile from '../components/ChangeProfile'

function Profile(props) {

  return (
    <main>
      <h1>PROFILE</h1>
      <h2>User: {props.username}</h2>
      <ChangeProfile setUsername={props.setUsername} />
    </main>
  )
}
export default Profile