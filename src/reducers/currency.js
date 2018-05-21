import { handleActions } from 'redux-actions'

import actions from '../actions/currency'


export default handleActions({
  [actions.list]: (state, action) => {
    return { ...state, ...action.payload }
  },
}, {})
