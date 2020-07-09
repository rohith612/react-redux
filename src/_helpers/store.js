import { createStore , applyMiddleware , combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import userReducer from '../_reducer/user.reducer'
import profileReducer from '../_reducer/profile.reducer'

// combining two reducers into a single reducer
const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer
})

const store  = createStore(reducer , {} , applyMiddleware(thunk,logger))

export default store;
