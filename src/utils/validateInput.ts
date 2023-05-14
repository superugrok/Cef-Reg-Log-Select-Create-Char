export const validateValue = (
  value: string,
  type: "email" | "password" | "repeatPass" | "player",
  repeatPass?: string
) => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/;
  const playerFormat =
    /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/;
  const emailTests = {
    format: emailFormat.test(value),
    length: value.length >= 5 && value.length <= 40,
  };
  const playerTests = {
    format: playerFormat.test(value),
    length: value.length >= 5 && value.length <= 30,
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
    case "player":
      return playerTests.format && playerTests.length;
  }
};
