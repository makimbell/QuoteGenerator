import React, { Component } from 'react'

class KanyeQuote extends Component {
  constructor () {
    super()
    this.state = {
      quote: ''
    }
  }

  render () {
    // Return an <h2> element with the Kanye quote generated below
    return (
      <h2>{this.state.quote}</h2>
    )
  }

  async componentDidMount () {
    // This is called when the component mounts

    // Call Kanye quote API and parse the JSON file
    const response = await fetch('https://api.kanye.rest/')
    const json = await response.json()

    // Set state to quote held in json variable
    this.setState({ quote: json.quote })
  }
}

export default KanyeQuote
