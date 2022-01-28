import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo";
import "./style.css"

const selectTodos = state => state.todos;
const selectFilter = state => state.filter;

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const filter = useSelector(selectFilter);


    const filterTodo = todo => {
        const passesStatus =
            !filter.status || ((filter.status === "complete" && todo.completed) || (filter.status === "active" && !todo.completed))
        const passesColor = filter.color.length === 0 || filter.color.indexOf(todo.color) !== -1

        return passesStatus && passesColor
    }

    return (
        <div className="todo-list">
            {todos.filter(filterTodo).map(todo => <Todo key={todo.id} id={todo.id} />)}
        </div>
    )
}

export default TodoList;