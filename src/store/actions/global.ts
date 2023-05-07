import { globalReducer } from "@Store/reducers/global";
import { Dispatch } from "@reduxjs/toolkit";

export const changeCurrentStage = (
  newStage: "enter" | "chars" | "create",
  dispatch: Dispatch
) => dispatch(globalReducer.actions.CHANGE_CURRENT_STAGE(newStage));

export const finishEnter = (email: string, dispatch: Dispatch) =>
  dispatch(globalReducer.actions.FINISH_ENTER(email));
