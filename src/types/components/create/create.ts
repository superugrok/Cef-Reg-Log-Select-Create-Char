export interface ICreateSectionProps {
  stage: "parents" | "clothing" | "apparence";
}

export interface IStagesProps {
  setStage: Function;
  stage: string;
}

export interface ICreateChangeValue {
  value: string | number;
  type: string;
  stage: string;
}

export interface ISwitcherProps {
  stage: string;
  type: string;
}

export interface ISwitchRangeProps {
  stage: string;
  type: string;
  range?: boolean;
}
