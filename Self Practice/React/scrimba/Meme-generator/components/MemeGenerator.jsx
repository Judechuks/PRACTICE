import React, {Component} from 'react'

class MemeGenerator extends Component{
  constructor(){ 
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({randomImg: randMemeImg})
  }

  componentDidMount(){
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({allMemeImgs: memes})
      })
  }

  render() {
    return (
     <div>
      <form className='meme-form' onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name='topText' value={this.state.topText} placeholder='Top Text'/>        
        <input onChange={this.handleChange} name='bottomText' value={this.state.bottomText} placeholder='Bottom Text'/>        
        <button>Gen</button>
      </form>
      <div className='meme'>
        <h2 className='top text-3xl font-bold'>{this.state.topText}</h2>
        <img src={this.state.randomImg} alt="Meme" />
        <h2 className='bottom text-3xl font-bold'>{this.state.bottomText}</h2>
      </div>
     </div>
    )
  }
}

export default MemeGenerator