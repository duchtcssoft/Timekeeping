// libs
import { combineReducers } from "redux";
// reducers
import { exampleReducer } from "./exampleReducer";

export const Home = combineReducers({
  exampleReducer,
});
