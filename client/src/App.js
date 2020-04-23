/*eslint-disable */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import SucculentPhoto from './components/SucculentPhoto/index'
import { Container, Row, Col } from './components/Grid'
import Home from './pages/Home/Home'

import Search from './pages/Search/Search'
import PlantData from './pages/test'
import Maintenance from './components/maintenance/maintenace'

function App() {
  return (
    <div>
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/plantdata' component={PlantData} />
            <Route exact path='/maintenance' component={Maintenance} />

          </Switch>
        </Router>
      </>
    </div>
  )
}

export default App
