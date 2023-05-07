import React from "react";
import { IStagesProps } from "@Types/components/enter/stages";

export const Stages = ({ stage, setStage }: IStagesProps) => {
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
