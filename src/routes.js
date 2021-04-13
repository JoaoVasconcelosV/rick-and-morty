import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home, Locations, Episodes } from './pages/index'

const Routes = () => {
  return (
    <Router>
      <Route path='/' exact component={Home}/>
      <Route path='/locations' component={Locations}/>
      <Route path='/episodes' component={Episodes}/>
    </Router>
  )
}

export default Routes