import React, { Component } from 'react'
import './App.css'
import KanyeQuote from './KanyeQuote'
import RonSwansonQuote from './RonSwansonQuote'
import BreakingBadQuote from './BreakingBadQuote'
import { Link, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return <div className='container'>
      <h1 className='text-center m-5 text-primary'>Quote Generator</h1>

      <Route path='/kanye'
      // Render Kanye quote section of the page
        render={() =>
          <div className='text-center m-5 text-dark'>
            <KanyeQuote />
          </div>
        }
      />
      <Route path='/ron-swanson'
      // Render Ron Swanson quote section of the page
        render={() =>
          <div className='text-center m-5 text-dark'>
            <RonSwansonQuote />
          </div>
        }
      />
      <Route path='/breaking-bad'
      // Render Breaking Bad quote section of the page
        render={() =>
          <div className='text-center m-5 text-dark'>
            <BreakingBadQuote />
          </div>
        }
      />
      <div className='container'>
        <div className='row'>
          <Link to='/kanye' type='button' className='btn btn-dark btn-lg mx-3 col-sm'>Kanye</Link>
          <Link to='/ron-swanson' type='button' className='btn btn-dark btn-lg mx-3 col-sm'>Ron Swanson</Link>
          <Link to='/breaking-bad' type='button' className='btn btn-dark btn-lg mx-3 col-sm'>Breaking Bad</Link>
        </div>
      </div>
    </div>
  }
}

export default App
