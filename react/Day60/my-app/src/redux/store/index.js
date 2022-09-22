import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counterReducer";
import listReducer from "../reducers/listReducer";

const allReducers = {
  counter: counterReducer,
  list: listReducer,
};

const rootReducer = combineReducers(allReducers);

let store = createStore(rootReducer);

export default store;
