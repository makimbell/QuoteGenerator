import React, { Component } from 'react'

class RonSwansonQuote extends Component {
  constructor () {
    super()
    this.state = {
      quote: ''
    }
  }

  render () {
    return (
      <h1>{this.state.quote}</h1>
    )
  }

  async componentDidMount () {
    // This is called when our component mounts
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    const json = await response.json()
    console.log(json)
    this.setState({ quote: json })
  }
}

export default RonSwansonQuote
