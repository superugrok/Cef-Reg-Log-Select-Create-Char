import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { globalReducer } from "./reducers/global";
import { createReducer } from "./reducers/create";

const reducer = combineReducers({
  global: globalReducer.reducer,
  create: createReducer.reducer,
});

export const store = configureStore({ reducer });
