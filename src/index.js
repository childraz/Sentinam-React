import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Hem from './views/hem'
import Bestll from './views/bestll'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Hem} exact path="/" />
        <Route component={Bestll} exact path="/bestll" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
