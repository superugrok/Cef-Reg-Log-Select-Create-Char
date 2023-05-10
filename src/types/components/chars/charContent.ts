import { ICharsList } from "components/enter/login";

export interface ICharExistProps {
  char: ICharsList;
}

export interface ICharToBuyProps {
  charCost: number;
  index: number;
}
