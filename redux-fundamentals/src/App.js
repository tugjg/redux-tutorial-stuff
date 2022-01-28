import "./style.css"

import Actions from "./components/Actions";
import Filter from "./components/Filter"
import Stats from "./components/Stats";
import TodoList from "./components/TodoList";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

function App() {
  const [newTodoText, setNewTodoText] = useState("")
  const dispatch = useDispatch();
  const newTodoRef = useRef();

  const addNewTodo = () => {
    dispatch({ type: "todos/add", payload: newTodoText })
    setNewTodoText("");
    newTodoRef.current.focus();
  }

  useEffect(() => {
    newTodoRef.current.focus();
  }, [])

  return (
    <div className="todo-app">
      <h2 className="app-header">Very Simple Redux Todo App</h2>
      <div className="new-todo">
        <label>New Todo: </label>
        <input type="text" placeholder="todo to-be" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} ref={newTodoRef} />
        <button type="button" onClick={addNewTodo} disabled={!newTodoText}>+</button>
      </div>

      <TodoList />
      <Filter />
      <div className="footer">
        <Actions />
        <Stats />
      </div>
    </div>
  );
}

export default App;
