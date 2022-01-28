const initialState = { status: null, color: [] }

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'filter/status': {
            return {
                ...state,
                status: state.status === action.payload ? null : action.payload

            }
        }
        case 'filter/color': {
            return {
                ...state,
                color: state.color.indexOf(action.payload) === -1
                    ? [...state.color, action.payload]
                    : state.color.filter(color => color !== action.payload)
            }
        }
        default:
            return state;
    }
}

export default filterReducer;