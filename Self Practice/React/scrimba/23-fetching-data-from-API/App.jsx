import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }
  // Using Star wars API
  componentDidMount(){
    this.setState({
      loading: true
    })
    // fetch("https://swapi.co/api/people/1") //no longer in use
    fetch("https://swapi.dev/api/people/1") // current one as at September 2023
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      }
    )
  }

  /*
  after fetching an api, it will send a response, which will be stored in a JSON format and then get the dat from the JSON object which has to be stored as a state, so that it can be accessed.
  */ 

  render() {
    /*const text = this.state.loading ? 'loading...' : this.state.character.name
    return(<div>{text}</div>)*/
    return (
      <div className='text-xl font-bold mx-5 my-2 p-2'>
        {this.state.loading ? 'loading...' :
          <>
            <h1 className='text-3xl mb-3'>Star Wars Cast</h1>
            <ol className='list-decimal list-inside'>
              <li>{this.state.character.name}
                <ul className='mx-5'>
                  <li>{this.state.character.gender}</li>
                  <li>{this.state.character.birth_year}</li>
                </ul>
              </li>
            </ol>
          </>}
      </div>
    )
  }
}

export default App