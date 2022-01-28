import { useSelector } from "react-redux";


const selectNumberOfIncompleteTodos = state => state.todos.filter(todo => !todo.completed).length;
const Stats = () => {

    const remainingTodos = useSelector(selectNumberOfIncompleteTodos);
    return (
        <div>Remaining Todos: {remainingTodos}</div>
    )
}

export default Stats;