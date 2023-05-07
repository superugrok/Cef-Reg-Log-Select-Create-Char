import React from "react";
import "@Styles/common/logo.css";
import logoImg from "@Images/common/logo.png";

export const Logo = ({ stage }) => {
  const getClassName = (stage: string) => {
    switch (stage) {
      case "enter":
        return "logo_enter";
      case "chars":
        return "logo_chars";
      default:
        return "logo_enter";
    }
  };

  return <img className={getClassName(stage)} src={logoImg} />;
};
