import { ICharsList } from "components/enter/login";
import { ICreateReducer } from "./create";

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
  create: ICreateReducer;
}
