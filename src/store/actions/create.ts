import { Dispatch } from "@reduxjs/toolkit";
import { createReducer } from "@Store/reducers/create";
import { ICreateChangeValue } from "@Types/components/create/create";

export const changeValue = (dispatch: Dispatch, newValue: ICreateChangeValue) =>
  dispatch(createReducer.actions.CHANGE_VALUE(newValue));
