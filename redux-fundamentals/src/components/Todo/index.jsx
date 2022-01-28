import "./style.css"

import { useSelector, useDispatch } from "react-redux";
import colors from "../../redux/slices/filter/colors"

const selectTodo = (state, id) => state.todos.find(todo => todo.id === id);

const Todo = ({ id }) => {
    const todo = useSelector(state => selectTodo(state, id));
    const dispatch = useDispatch();

    const toggleComplete = () => {
        dispatch({ type: "todos/toggle", payload: id })
    }

    const changeColor = (color) => {
        dispatch({ type: "todos/color", payload: { id, color } })
    }

    const deleteTodo = () => {
        dispatch({ type: "todos/delete", payload: id })
    }

    return (
        <div className="todo">
            <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
            <span className="todo-text"> {todo.text} </span>

            <select onChange={(e) => changeColor(e.target.value)} defaultValue={todo.color}>
                {colors.map(option =>
                    <option key={option.value} value={option.value}>{option.text}</option>
                )}
            </select>

            <button type="button" onClick={deleteTodo}>X</button>


        </div>
    );
}

export default Todo;