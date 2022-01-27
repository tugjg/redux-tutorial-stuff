export const addStupidKeyValue = createStore => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers);

        const newGetState = () => {
            return {
                ...store.getState(),
                stupidKeyValue: "yeah"
            }
        }

        return { ...store, getState: newGetState }
    }
}