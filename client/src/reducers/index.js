import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import positionsReducer from './positions'
import userReducer from './user'

export default combineReducers({
  positions: positionsReducer,
  router: routerReducer,
  form: formReducer,
  user: userReducer,
})
