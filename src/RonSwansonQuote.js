import React, { Component } from 'react'

class RonSwansonQuote extends Component {
  constructor () {
    super()
    this.state = {
      quote: ''
    }
  }

  render () {
    // Return an <h2> element with the Ron Swanson quote generated below
    return (
      <h2>{this.state.quote}</h2>
    )
  }

  async componentDidMount () {
    // This is called when our component mounts

    // Call Kanye quote API and parse the JSON file
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    const json = await response.json()

    // Set state to quote held in json variable
    this.setState({ quote: json })
  }
}

export default RonSwansonQuote
