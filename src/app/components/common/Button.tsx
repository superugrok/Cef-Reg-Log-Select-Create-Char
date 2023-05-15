import React from "react";
import "@Styles/common/button.css";
import { IButtonProps } from "components/common/button";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";

export const Button = ({ text, onClick, type, disabled }: IButtonProps) => {
  const dayTime = useSelector((state: IStore) => state.global.time);
  const className =
    dayTime == "day" ? "reglog_button_day" : "reglog_button_night";

  return (
    <button
      disabled={disabled}
      type={type}
      className={`reglog_button ${className}`}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};
