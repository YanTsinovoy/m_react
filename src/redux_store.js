import {createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'


let tokenReducer = (state = {token: null}, action) => {
  if(action.type === "SET_TOKEN")return {token: action.token}
  if(action.type === "CLEAR_TOKEN")return {token: null}
  return state
}
const mainReducer = combineReducers({
  token: tokenReducer,
  form: formReducer
})

const store = createStore(mainReducer)

export default store
