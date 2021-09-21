import { configureStore } from '@reduxjs/toolkit';
import countReducer from './slices/countSlice';
import { combineReducers, createStore } from 'redux';
import reduxCountReducer from './ducks/countReducer';

// redux-toolkit store
// export const store = configureStore({
//   reducer: {
//       counter: countReducer
//   },
// })
// redux-toolkit store

// simple redux store
const reducers = combineReducers({
  counter: reduxCountReducer
})

export const store = createStore(reducers);
// simple redux store