import todosReducer from "./todosSlice"

test('add a todo', () => {
    const initialState = [];
    const action = { type: 'todos/add', payload: "a new todo" };
    const result = todosReducer(initialState, action);
    expect(result[0]).toEqual({ id: 0, text: "a new todo", completed: false, color: null })
})

test('delete a todo', () => {
    const initialState = [{ id: 0, text: "a new todo", completed: false, color: null }];
    const action = { type: 'todos/delete', payload: 0 };
    const result = todosReducer(initialState, action);
    expect(result[0]).toBeUndefined()
})