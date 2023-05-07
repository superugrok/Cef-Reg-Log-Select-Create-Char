import { Dispatch, SetStateAction } from "react";

export interface IErrorProps {
  errorText: string;
  setError: Dispatch<SetStateAction<string>>;
}
