import React, { Component } from 'react'
import './App.css'
import KanyeQuote from './KanyeQuote'
import RonSwansonQuote from './RonSwansonQuote'
import BreakingBadQuote from './BreakingBadQuote'
import { Link, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return <div>
      <div>
        <nav>
          <ul className>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/kanye'>Kanye</Link></li>
            <li><Link to='/ron-swanson'>Ron Swanson</Link></li>
            <li><Link to='/breaking-bad'>Breaking Bad</Link></li>
          </ul>
        </nav>
      </div>
      <Route path='/kanye'
        render={() =>
          <div>
            <KanyeQuote />
          </div>
        }
      />
      <Route path='/ron-swanson'
        render={() =>
          <div>
            <RonSwansonQuote />
          </div>
        }
      />
      <Route path='/breaking-bad'
        render={() =>
          <div>
            <BreakingBadQuote />
          </div>
        }
      />
    </div>
  }
}

export default App
