import { ICharsList } from "@Types/components/enter/login";
import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export const debugLogin = (
  finishEnter: Function,
  dispatch: Dispatch<AnyAction>
) => {
  const email = "debug@google.com";
  const dummyPlayer1 = {
    charName: "Paul Don",
    personalMoney: 2500,
    bankMoney: 1999,
    job: "Police",
    level: 5,
    faction: "Ballas gang",
    lastSeen: "25/7/2004",
  };
  const dummyPlayer2 = {
    charName: "Paul Markov",
    personalMoney: 2500,
    bankMoney: 1000,
    job: "FBI",
    level: 2,
    faction: "Groove street",
    lastSeen: "05/2/2002",
  };
  const priceToOpen = 2500;
  const chars: ICharsList[] = [dummyPlayer1, null];
  finishEnter(email, chars, priceToOpen, dispatch);
};
