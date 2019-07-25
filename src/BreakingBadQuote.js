import React, { Component } from 'react'

class BreakingBadQuote extends Component {
  constructor () {
    super()
    this.state = {
      quote: ''
    }
  }

  render () {
    // Return an <h2> element with the Breaking Bad quote generated below
    return (
      <h2>{this.state.quote}</h2>
    )
  }

  async componentDidMount () {
    // This is called when the component mounts

    // Call Breaking Bad quote API and parse the JSON file
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const json = await response.json()

    // Set state to quote held in json variable
    this.setState({ quote: json[0].quote })
  }
}

export default BreakingBadQuote
