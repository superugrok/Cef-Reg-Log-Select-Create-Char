import React from "react";
import { useSelector } from "react-redux";
import "@Styles/common/main.css";

import { Chars } from "@Components/Chars";
import { Create } from "@Components/Create";
import { Enter } from "@Components/Enter";
import { IStore } from "@Types/store/store";

export const App = () => {
  const stage = useSelector((state: IStore) => state.global.stage);
  const renderStage = () => {
    switch (stage) {
      case "enter":
        return <Enter />;
      case "chars":
        return <Chars />;
      case "create":
        return <Create />;
      default:
        return <Enter />;
    }
  };

  return renderStage();
};
