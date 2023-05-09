import { ICharsList } from "components/enter/login";

export interface IGlobalReducer {
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
