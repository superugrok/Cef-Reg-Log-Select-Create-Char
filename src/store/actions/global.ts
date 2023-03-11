import { globalReducer } from "@Store/reducers/global";

export const changeCurrentStage = (newStage: "enter" | "chars" | "create") =>
  globalReducer.actions.CHANGE_CURRENT_STAGE(newStage);

export const changeEmail = (newEmail: string) =>
  globalReducer.actions.CHANGE_EMAIL(newEmail);
