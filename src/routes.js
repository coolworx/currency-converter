import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './components/Home/container'


export default function createRoutes(store) {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  )
}
