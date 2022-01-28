import "./style.css"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const selectStatus = state => state.filter.status;

const StatusFilter = () => {


    return (
        <div className="status-filter">
            <StatusButton status="active" text="Active" />
            <StatusButton status="complete" text="Complete" />
        </div>
    )
}

const StatusButton = (props) => {
    const { status, text } = props;
    const dispatch = useDispatch();
    const activeStatus = useSelector(selectStatus);

    return (
        <button type="button" className={`status-button ${status === activeStatus ? 'active' : ''}`} onClick={() => dispatch({ type: "filter/status", payload: status })}>
            {text}
        </button>
    )
}

export default StatusFilter;