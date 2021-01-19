import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import filesReducer from './filesReducer'

const store = createStore(filesReducer, applyMiddleware(thunkMiddleware))

export default store