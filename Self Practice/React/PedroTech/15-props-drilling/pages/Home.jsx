
function Home(props) {

  return (
    <main>
      <h1>THIS IS THE <b className="font-extrabold">HOME</b> PAGE
      </h1>
      <h2>The user is: {props.username}</h2>
    </main>
  )
}
export default Home