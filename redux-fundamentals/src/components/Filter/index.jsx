import "./style.css"

import StatusFilter from "./StatusFilter";
import ColorFilter from "./ColorFilter";


const Filter = () => {
    return (
        <div className="filter">
            <div>
                <h3>Status</h3>
                <StatusFilter />
            </div>
            <div>
                <h3>Color</h3>
                <ColorFilter />
            </div>
        </div >
    )
}

export default Filter;
