import { Dispatch } from "@reduxjs/toolkit";
import { createReducer } from "@Store/reducers/create";

export const changeValue = (dispatch: Dispatch, newValue: any) =>
  dispatch(createReducer.actions.CHANGE_VALUE(newValue));
