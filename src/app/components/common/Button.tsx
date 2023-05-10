import React from "react";
import "@Styles/common/button.css";
import { IButtonProps } from "components/common/button";

export const Button = ({ text, onClick, type, disabled }: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="reglog_button"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};
