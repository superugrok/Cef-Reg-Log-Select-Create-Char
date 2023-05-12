import { Dispatch } from "@reduxjs/toolkit";
import { createReducer } from "@Store/reducers/create";
import { ICreateChangeValue } from "@Types/components/create/create";
import { ICreateReducer } from "@Types/store/create";

export const changeValue = (dispatch: Dispatch, newValue: ICreateChangeValue) =>
  dispatch(createReducer.actions.CHANGE_VALUE(newValue));

export const setDefaultState = (dispatch: Dispatch) =>
  dispatch(createReducer.actions.SET_DEFAULT_STATE());

export const setRandom = (dispatch: Dispatch, newState: ICreateReducer) =>
  dispatch(createReducer.actions.SET_RANDOM(newState));
