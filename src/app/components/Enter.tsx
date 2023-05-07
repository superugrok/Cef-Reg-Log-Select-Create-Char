import React from "react";
import "@Styles/common/background.css";
import "@Styles/enter/enter_base.css";
import { useSelector } from "react-redux";

import { IStore } from "@Types/store/store";
import { Logo } from "@Components/common/Logo";
import { Block } from "@Components/common/Block";
import { Login } from "@Components/enter/Login";
import { Register } from "@Components/enter/Register";
import { Stages } from "@Components/enter/Stages";

export const Enter = () => {
  const dayTime = useSelector((state: IStore) => state.global.time);
  const getBackground = () => (dayTime === "day" ? "bg bg-day" : "bg bg-night");
  const [stage, setStage] = React.useState<"login" | "register">("login");

  return (
    <div className={getBackground()}>
      <div className="enter_container">
        <Logo stage="enter" />
        <Block stage="enter">
          <Stages stage={stage} setStage={setStage} />
          <Login stage={stage} />
          <Register stage={stage} />
        </Block>
      </div>
    </div>
  );
};
