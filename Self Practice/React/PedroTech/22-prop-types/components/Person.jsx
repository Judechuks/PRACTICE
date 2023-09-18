import { PropTypes} from 'prop-types'

export const Person = (props) => {

  return (
    <div className='mb-3 text-2xl'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      <p>Marital Status: {props.isMarried ? "Married" : "Single"}</p>
      <p>Friends: {props.friends.map((friend) => friend + " ")}</p>
      {/* <p>Friends: {props.friends.map((friend) => (<p>{friend}</p>))}</p> */}
    </div>
  )
}

/* install typescript using:
 npx create-react-app . --template typescript
 (outdated)*/

/*
To use prop-type, install it by:
 npm install prop-type
Then create your props safety types as shown below:
 */

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
}