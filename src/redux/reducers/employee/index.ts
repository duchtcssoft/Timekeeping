// libs
import { combineReducers } from "redux";
// reducers
import { successReducer } from "./successReducer";
import { modalReducer } from "./modalReducer";
import { employeeReducer } from "./employeeReducer";

// TODO: talk
export const Employee = combineReducers({
  successReducer,
  modalReducer,
  employeeReducer,
});
