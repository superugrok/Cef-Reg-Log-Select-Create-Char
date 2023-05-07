export interface IGlobalReducer {
  stage: "enter" | "chars" | "create";
  email: null | string;
  time: string;
}

export interface IStore {
  global: IGlobalReducer;
}
