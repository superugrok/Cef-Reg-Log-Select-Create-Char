import React from "react";
import { IStagesProps } from "@Types/components/enter/stages";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";

export const Stages = ({ stage, setStage }: IStagesProps) => {
  const dayTime = useSelector((state: IStore) => state.global.time);
  const className = `enter_stages_btn ${
    dayTime == "day" ? "enter_stages_btn_day" : "enter_stages_btn_night"
  }`;
  const selectedClassName =
    dayTime == "day"
      ? "enter_stages_btn_day_selected"
      : "enter_stages_btn_night_selected";

  const getStageBtnStyle = (btnStage: "login" | "register") => {
    switch (btnStage) {
      case "login":
        return stage == "login"
          ? ` ${className} enter_stages_btn_log ${selectedClassName}`
          : ` ${className} enter_stages_btn_log`;
      case "register":
        return stage == "register"
          ? `${className} enter_stages_btn_reg ${selectedClassName}`
          : `${className} enter_stages_btn_reg`;
    }
  };

  return (
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
  );
};
