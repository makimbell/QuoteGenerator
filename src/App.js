import React, { Component } from 'react'
import './App.css'
import KanyeQuote from './KanyeQuote'
import RonSwansonQuote from './RonSwansonQuote'
import BreakingBadQuote from './BreakingBadQuote'
import { Link, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return <div class='container'>
      <h1 class='text-center m-5 text-primary'>Quote Generator</h1>

      <Route path='/kanye'
        render={() =>
          <div class='text-center m-5 text-dark'>
            <KanyeQuote />
          </div>
        }
      />
      <Route path='/ron-swanson'
        render={() =>
          <div class='text-center m-5 text-dark'>
            <RonSwansonQuote />
          </div>
        }
      />
      <Route path='/breaking-bad'
        render={() =>
          <div class='text-center m-5 text-dark'>
            <BreakingBadQuote />
          </div>
        }
      />

      <div class='container'>
        <div class='row'>
          <Link to='/kanye' type='button' class='btn btn-dark btn-lg mx-3 col-sm text'>Kanye</Link>
          <Link to='/ron-swanson' type='button' class='btn btn-dark btn-lg mx-3 col-sm'>Ron Swanson</Link>
          <Link to='/breaking-bad' type='button' class='btn btn-dark btn-lg mx-3 col-sm'>Breaking Bad</Link>
        </div>
      </div>
    </div>
  }
}

export default App
