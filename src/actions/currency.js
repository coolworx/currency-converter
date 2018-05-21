import { createAction } from 'redux-actions'

const CURRENCY = {
  INIT: 'CURRENCY_INIT'
}

export default {
  init: createAction(CURRENCY.INIT),
}
