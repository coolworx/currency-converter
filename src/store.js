import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware, routerReducer as routing, push } from 'react-router-redux'

import currencyActions from './actions/currency'
import currencyReducer from './reducers/currency'


export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const actionCreators = {
    ...currencyActions,
    push
  }

  const reducers = {
    currencyReducer,
    routing
  }

  const middlewares = [ 
    // other middleware (thunk, saga, etc.) can be added here
    router 
  ]

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if(process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators })
    }
    return compose
  })()

  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  const rootReducer = combineReducers(reducers)

  let store = createStore(rootReducer, initialState, enhancer)

  return store  
}
