import { Dispatch } from "@reduxjs/toolkit";
import { createReducer } from "@Store/reducers/create";
import { ICreateChangeValue } from "@Types/components/create/create";
import { ICreateReducer } from "@Types/store/create";
import { queryGen } from "@Utils/create/queryGen";

export const changeValue = (
  dispatch: Dispatch,
  debugMode: boolean,
  newValue: ICreateChangeValue
) => {
  newValue.type == "gender"
    ? queryGen(
        newValue.currentState,
        "gender",
        newValue.type,
        newValue.value,
        null,
        debugMode
      )
    : queryGen(
        newValue.currentState,
        "change",
        newValue.type,
        newValue.value,
        null,
        debugMode
      );
  dispatch(createReducer.actions.CHANGE_VALUE(newValue));
};

export const setDefaultState = (dispatch: Dispatch, debugMode: boolean) => {
  const defaultState = createReducer.getInitialState();
  queryGen(defaultState, "change", null, null, null, debugMode);
  dispatch(createReducer.actions.SET_DEFAULT_STATE());
};

export const setRandom = (
  dispatch: Dispatch,
  newState: ICreateReducer,
  debugMode: boolean
) => {
  queryGen(newState, "change", null, null, null, debugMode);
  dispatch(createReducer.actions.SET_RANDOM(newState));
};
