import React, { FormEvent } from "react";
import { Input } from "@Components/common/Input";
import { Button } from "@Components/common/Button";
import { Error } from "@Components/common/Error";
import { validateValue } from "@Utils/validatePassEmail";
import { IRegisterProps } from "@Types/components/enter/register";

export const Register = ({ stage }: IRegisterProps) => {
  // Errors states
  const [regError, setRegError] = React.useState(null);
  // Register refs
  const emailRegRef = React.useRef(null);
  const passRegRef = React.useRef(null);
  const passRepeatRegRef = React.useRef(null);

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
      <Button type="submit" text={"Complete"} onClick={() => register()} />
    </form>
  );
};
