const initialState = []

const nextTodoId = todos => {
    if (todos.length === 0) {
        return 0;
    }

    const todoIds = todos.reduce((todoIds, todo) => [...todoIds, todo.id], []);
    const maxTodoId = Math.max(...todoIds);
    return maxTodoId + 1;
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/add':
            return [...state, {
                id: nextTodoId(state),
                text: action.payload,
                completed: false
            }]


        case 'todos/delete':
            return state.filter(todo => todo.id !== action.payload)

        case 'todos/deleteAll':
            return [];


        case 'todos/toggle':
            return state.map(todo =>
                action.payload === todo.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )

        case 'todos/toggleAll':
            return state.map(todo => {
                return { ...todo, completed: true }
            })

        default:
            return state;
    }
}

export default todosReducer;