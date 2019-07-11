import React, { Component } from 'react'

class BreakingBadQuote extends Component {
  constructor () {
    super()
    this.state = {
      quote: ''
    }
  }

  render () {
    return (
      <div>
        <h2>{this.state.quote}</h2>
      </div>
    )
  }

  async componentDidMount () {
    // This is called when our component mounts
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const json = await response.json()
    console.log(json)
    this.setState({ quote: json[0].quote })
  }
}

export default BreakingBadQuote
