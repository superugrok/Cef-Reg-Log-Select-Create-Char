import { globalReducer } from "@Store/reducers/global";
import { Dispatch } from "@reduxjs/toolkit";
import { ICharsList } from "components/enter/login";

export const changeCurrentStage = (
  newStage: "enter" | "chars" | "create",
  dispatch: Dispatch
) => dispatch(globalReducer.actions.CHANGE_CURRENT_STAGE(newStage));

export const finishEnter = (
  email: string,
  chars: ICharsList[],
  price: number,
  dispatch: Dispatch
) => dispatch(globalReducer.actions.FINISH_ENTER({ email, chars, price }));
