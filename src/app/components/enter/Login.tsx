import React, { FormEvent } from "react";
import { Input } from "@Components/common/Input";
import { Button } from "@Components/common/Button";
import { Error } from "@Components/common/Error";
import { finishEnter } from "@Store/actions/global";
import { useDispatch, useSelector } from "react-redux";
import { validateValue } from "@Utils/validatePassEmail";
import { ICharsList, ILoginProps } from "@Types/components/enter/login";
import { IStore } from "@Types/store/store";

export const Login = ({ stage }: ILoginProps) => {
  // Debug mode!
  const debugMode = useSelector((state: IStore) => state.global.debugMode);

  const dispatch = useDispatch();
  // Error state
  const [logError, setLogError] = React.useState(null);
  // Login refs
  const emailLogRef = React.useRef(null);
  const passLogRef = React.useRef(null);

  const debugLogin = () => {
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

  const login = () => {
    const email = emailLogRef.current.value.trim();
    const password = passLogRef.current.value.trim();
    const isEmailValide = validateValue(email, "email");
    const isPassValide = validateValue(password, "password");

    (isEmailValide && isPassValide) || debugMode
      ? debugMode
        ? debugLogin()
        : console.log("Commiting login" + email + password)
      : setLogError("One or more of entered fields is incorrect");
  };

  // *** Window funcs ***
  // @ts-ignore
  window.loginComplite = (
    email: string,
    jsonChars: string,
    priceToBuy: number
  ) => {
    const chars: ICharsList[] = JSON.parse(jsonChars);
    finishEnter(email, chars, priceToBuy, dispatch);
  };
  // @ts-ignore
  window.setLoginError = (error: string) => {
    setLogError(error);
  };

  return (
    <form
      className="enter_form_container"
      style={{ display: stage == "login" ? "inherit" : "none" }}
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <Error errorText={logError} setError={setLogError} />
      <Input
        type="email"
        placeholder="example@gmail.com"
        inputRef={emailLogRef}
        minLength={5}
        maxLength={40}
      />
      <Input
        type="password"
        placeholder="☆☆☆☆☆☆☆☆☆"
        inputRef={passLogRef}
        minLength={7}
        maxLength={30}
      />
      <Button type="submit" text={"Complete"} onClick={() => login()} />
    </form>
  );
};
