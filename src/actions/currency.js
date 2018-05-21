import { createAction } from 'redux-actions'

const CURRENCY = {
  LIST: 'CURRENCY_LIST'
}

export default {
  list: createAction(CURRENCY.LIST),
}
