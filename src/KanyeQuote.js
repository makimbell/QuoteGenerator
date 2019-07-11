import React, { Component } from 'react'

class KanyeQuote extends Component {
  constructor () {
    super()
    this.state = {
      quote: ''
    }
  }

  render () {
    return (
      <h2>{this.state.quote}</h2>
    )
  }

  async componentDidMount () {
    // This is called when our component mounts
    const response = await fetch('https://api.kanye.rest/')
    const json = await response.json()
    console.log(json)
    this.setState({ quote: json.quote })
  }
}

export default KanyeQuote
