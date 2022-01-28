import "./style.css"
import { useDispatch } from "react-redux";

const Actions = () => {
    const dispatch = useDispatch();

    const completeAll = () => {
        dispatch({ type: "todos/completeAll" });
    }

    const deleteCompleted = () => {
        dispatch({ type: "todos/deleteCompleted" })
    }

    return (
        <div className="actions">
            <button type="button" onClick={completeAll}>Mark All Complete</button>
            <button type="button" onClick={deleteCompleted}>Clear Completed</button>
        </div>
    )
}

export default Actions;