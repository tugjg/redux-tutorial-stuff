import filterReducer from "./filterSlice"

test('adding status filter', () => {
    const initialState = { status: null, color: [] }
    const action = { type: 'filter/status', payload: 'ALL' }
    const result = filterReducer(initialState, action)
    expect(result.status).toBe('ALL')
})

test('changing status filter', () => {
    const initialState = { status: 'TO BE REPLACED', color: [] }
    const action = { type: 'filter/status', payload: 'THE REPLACEMENT' }
    const result = filterReducer(initialState, action)
    expect(result.status).toBe('THE REPLACEMENT')
})

test('adding a color filter', () => {
    const initialState = { status: null, color: [] }
    const action = { type: 'filter/color', payload: 'green' }
    const result = filterReducer(initialState, action)
    expect(result.color).toEqual(['green'])
})

test('removing a color filter', () => {
    const initialState = { status: null, color: ['green', 'red'] }
    const action = { type: 'filter/color', payload: 'green' }
    const result = filterReducer(initialState, action)
    expect(result.color).toEqual(['red'])
})