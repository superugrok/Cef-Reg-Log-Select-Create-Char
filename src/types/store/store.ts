export interface IGlobalReducer {
  stage: "enter" | "chars" | "create";
  email: null | string;
  time: string;
}
