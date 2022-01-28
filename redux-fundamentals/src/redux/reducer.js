import todosReducer from "./slices/todos/todosSlice"
import filterReducer from "./slices/filter/filterSlice"

import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
    todos: todosReducer,
    filter: filterReducer
})

export default combinedReducers;