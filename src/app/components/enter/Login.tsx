import React, { FormEvent } from "react";
import { Input } from "@Components/common/Input";
import { Button } from "@Components/common/Button";
import { Error } from "@Components/common/Error";
import { finishEnter } from "@Store/actions/global";
import { useDispatch } from "react-redux";
import { validateValue } from "@Utils/validatePassEmail";
import { ILoginProps } from "@Types/components/enter/login";

export const Login = ({ stage }: ILoginProps) => {
  const dispatch = useDispatch();
  // Error state
  const [logError, setLogError] = React.useState(null);
  // Login refs
  const emailLogRef = React.useRef(null);
  const passLogRef = React.useRef(null);

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
