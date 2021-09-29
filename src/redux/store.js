import { applyMiddleware, createStore, combineReducers } from "redux";
import todoReducer from "./ducks/todoReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    todoReducer: todoReducer
})

export const store = applyMiddleware(thunk)(createStore)(reducers);