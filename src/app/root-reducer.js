import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import gridReducer from "../features/grid/grid-slice";

const rootReducer = combineReducers({
  counter: counterReducer,
  grid: gridReducer,
});

export default rootReducer;
