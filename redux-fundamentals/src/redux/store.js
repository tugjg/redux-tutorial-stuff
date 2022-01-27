import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { addStupidKeyValue } from "./enhancers";
import { dispatchLogger, doNothingGood } from "./middleware";
import rootReducer from "./reducer"

const composedEnhancer = composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(doNothingGood, dispatchLogger),
    addStupidKeyValue
)

const store = createStore(
    rootReducer,
    undefined,
    composedEnhancer
);

export default store;