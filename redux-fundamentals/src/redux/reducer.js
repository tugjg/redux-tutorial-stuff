import todosReducer from "../components/todos/todosSlice"
import filterReducer from "../components/filter/filterSlice"

import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
    todos: todosReducer,
    filter: filterReducer
})

export default combinedReducers;