import { handleActions } from 'redux-actions'

import actions from '../actions/currency'


export default handleActions({
  [actions.intialize]: (state, action) => {
    return { ...state, ...action.payload }
  },
}, {})
