import { validateValue } from "./validateInput";

export const inputLiveValidate = (
  value: string,
  type: "email" | "password" | "player"
) => {
  const isEmailValid = validateValue(value.trim(), "email");
  const isPassValid = validateValue(value.trim(), "password");
  const isPlayerValid = validateValue(value.trim(), "player");
  switch (type) {
    case "email":
      return isEmailValid;
    case "password":
      return isPassValid;
    case "player":
      return isPlayerValid;
  }
};
