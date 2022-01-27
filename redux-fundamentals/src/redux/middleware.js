export const dispatchLogger = storeAPI => next => action => {
    console.log('(middleware) action dispatched', action)
    next(action);
    console.log('(middleware) next state', storeAPI.getState())
}

export const doNothingGood = storeAPI => next => action => {
    console.log('(do nothing good)')
    next(action);
}