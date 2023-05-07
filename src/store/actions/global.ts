import { globalReducer } from "@Store/reducers/global";

export const changeCurrentStage = (newStage: "enter" | "chars" | "create") =>
  globalReducer.actions.CHANGE_CURRENT_STAGE(newStage);

export const finishEnter = (email: string) =>
  globalReducer.actions.FINISH_ENTER(email);
