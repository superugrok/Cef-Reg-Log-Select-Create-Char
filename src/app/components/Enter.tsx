import React, { FormEvent } from "react";
import "@Styles/common/background.css";
import "@Styles/enter/enter_base.css";
import { useDispatch, useSelector } from "react-redux";

import { IStore } from "@Types/store/store";
import { Logo } from "@Components/common/Logo";
import { Block } from "@Components/common/Block";
import { Input } from "@Components/common/Input";
import { Button } from "@Components/common/Button";
import { Error } from "@Components/common/Error";
import { finishEnter } from "@Store/actions/global";

export const Enter = () => {
  const dayTime = useSelector((state: IStore) => state.global.time);
  const getBackground = () => (dayTime === "day" ? "bg bg-day" : "bg bg-night");
  const [stage, setStage] = React.useState<"login" | "register">("login");
  const dispatch = useDispatch();
  // Errors states
  const [regError, setRegError] = React.useState(null);
  const [logError, setLogError] = React.useState(null);

  // Register refs
  const emailRegRef = React.useRef(null);
  const passRegRef = React.useRef(null);
  const passRepeatRegRef = React.useRef(null);
  // Login refs
  const emailLogRef = React.useRef(null);
  const passLogRef = React.useRef(null);

  const getStageBtnStyle = (btnStage: "login" | "register") => {
    switch (btnStage) {
      case "login":
        return stage == "login"
          ? "enter_stages_btn enter_stages_btn_log enter_stages_btn_selected"
          : "enter_stages_btn enter_stages_btn_log";
      case "register":
        return stage == "register"
          ? "enter_stages_btn enter_stages_btn_reg enter_stages_btn_selected"
          : "enter_stages_btn enter_stages_btn_reg";
    }
  };

  const validateValue = (
    value: string,
    type: "email" | "password" | "repeatPass",
    repeatPass?: string
  ) => {
    const emailFormat = /^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailTests = {
      format: emailFormat.test(value),
      length: value.length >= 5 && value.length <= 40,
    };
    const passTests = {
      length: value.length >= 7 && value.length <= 30,
      repeat: value == repeatPass,
    };
    switch (type) {
      case "email":
        return emailTests.format && emailTests.length;
      case "password":
        return passTests.length;
      case "repeatPass":
        return passTests.repeat;
    }
  };

  const inputLiveValidate = (value: string, type: "email" | "password") => {
    const isEmailValid = validateValue(value.trim(), "email");
    const isPassValid = validateValue(value.trim(), "password");
    switch (type) {
      case "email":
        return isEmailValid;
      case "password":
        return isPassValid;
    }
  };

  const login = () => {
    const email = emailLogRef.current.value.trim();
    const password = passLogRef.current.value.trim();
    const isEmailValide = validateValue(email, "email");
    const isPassValide = validateValue(password, "password");
    isEmailValide && isPassValide
      ? // ? console.log("Commiting login" + email + password)
        finishEnter(email, dispatch)
      : setLogError("One or more of entered fields is incorrect");
  };

  const register = () => {
    const email = validateValue(emailRegRef.current.value.trim(), "email");
    const password = validateValue(passRegRef.current.value.trim(), "password");
    const repeatPass = validateValue(
      passRegRef.current.value.trim(),
      "repeatPass",
      passRepeatRegRef.current.value.trim()
    );
    const identifyError = () => {
      if (!email) setRegError("Entered email is invalid");
      else if (!password) setRegError("Etered password is invalid");
      else if (!repeatPass) setRegError("Entered passwords are not equals");
    };
    email && password && repeatPass
      ? console.log("Commiting register")
      : identifyError();
  };

  return (
    <div className={getBackground()}>
      <div className="enter_container">
        <Logo stage="enter" />
        <Block stage="enter">
          <div className="enter_stages_container">
            <button
              className={getStageBtnStyle("login")}
              onClick={() => setStage("login")}
            >
              Login
            </button>
            <button
              className={getStageBtnStyle("register")}
              onClick={() => setStage("register")}
            >
              Register
            </button>
          </div>
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
          <form
            className="enter_form_container"
            style={{ display: stage == "register" ? "inherit" : "none" }}
            onSubmit={(e: FormEvent) => e.preventDefault()}
          >
            <Error errorText={regError} setError={setRegError} />
            <Input
              type="email"
              placeholder="example@gmail.com"
              inputRef={emailRegRef}
              minLength={5}
              maxLength={40}
              onChange={inputLiveValidate}
              validate={true}
            />
            <Input
              type="password"
              placeholder="☆☆☆☆☆☆☆☆☆"
              inputRef={passRegRef}
              minLength={7}
              maxLength={30}
              onChange={inputLiveValidate}
              validate={true}
            />
            <Input
              type="password"
              placeholder="☆☆☆☆☆☆☆☆☆"
              inputRef={passRepeatRegRef}
              label="Repeat"
              minLength={7}
              maxLength={30}
            />
            <Button
              type="submit"
              text={"Complete"}
              onClick={() => register()}
            />
          </form>
        </Block>
      </div>
    </div>
  );
};
