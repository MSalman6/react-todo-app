import { configureStore } from '@reduxjs/toolkit';
import countReducer from './slices/countSlice';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxCountReducer from './ducks/countReducer';
import thunkReducer from './thunk/todos';
import thunk from 'redux-thunk';

// redux-toolkit store
// export const store = configureStore({
//   reducer: {
//       counter: countReducer
//   },
// })
// redux-toolkit store

// simple redux store
const reducers = combineReducers({
  counter: reduxCountReducer,
  todos: thunkReducer
})

export const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducers)

// export const store = createStore(reducers);
// simple redux store