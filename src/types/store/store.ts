import { ICharsList } from "components/enter/login";

export interface IGlobalReducer {
  debugMode: boolean;
  stage: "enter" | "chars" | "create";
  playerInfo: {
    charPrice: number;
    email: null | string;
    charsInfo: ICharsList[];
  };
  time: string;
}

export interface IStore {
  global: IGlobalReducer;
}
