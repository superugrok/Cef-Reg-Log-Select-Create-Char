import { Dispatch, SetStateAction } from "react";

export interface IStagesProps {
  stage: string;
  setStage: Dispatch<SetStateAction<"login" | "register">>;
}
