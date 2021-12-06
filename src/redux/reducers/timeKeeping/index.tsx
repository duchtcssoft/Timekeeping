import { combineReducers } from "redux";
// reducers
import { successReducer } from "./successReducer";
import { modalReducer } from "./modalReducer";
import { timeKeepingReducer } from "./timeKeepingReducer";

// TODO: talk
export const TimeKeeping = combineReducers({
  successReducer,
  modalReducer,
  timeKeepingReducer,
});
