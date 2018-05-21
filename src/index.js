import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'react-router-redux'
import { createMemoryHistory } from 'history'

import createRoutes from './routes'
import configureStore from './store'

import './index.css'

const state = {}
const routerHistory = createMemoryHistory()
const store = configureStore(state, routerHistory)

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ routerHistory }>
      { createRoutes(store) }
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
