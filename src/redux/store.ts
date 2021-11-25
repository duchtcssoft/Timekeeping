// libs
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
// reducers
import * as reducers from "@/redux/reducers";

const rootReducer = combineReducers({
  ...reducers,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState = {};

const composeWithDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTool(applyMiddleware(thunk)),
);

export { store };
export type TRootReducer = ReturnType<typeof rootReducer>;
export type TPageReducer = keyof TRootReducer;
