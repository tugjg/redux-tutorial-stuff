import colors from "../../../redux/slices/filter/colors"
import { useDispatch } from "react-redux"

const ColorFilter = () => {

    const dispatch = useDispatch();

    const toggleColor = (color) => {
        dispatch({ type: "filter/color", payload: color })
    }

    return (
        colors
            .filter(color => color.value)
            .map(color => (
                <span key={color.value} > <input type="checkbox" onClick={() => toggleColor(color.value)} /> <label>{color.text}</label> </span>
            ))
    )

}

export default ColorFilter;