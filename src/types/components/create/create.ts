export interface ICreateSectionProps {
  stage: "parents" | "clothing" | "apparence";
}

export interface IStagesProps {
  setStage: Function;
  stage: string;
}
