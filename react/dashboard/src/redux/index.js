import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
