import React from "react";
import { useSelector } from "react-redux";
import "@Styles/normalize.css";

import { Chars } from "@Components/Chars";
import { Create } from "@Components/Create";
import { Enter } from "@Components/Enter";

export const App = () => {
  const stage = useSelector((state: any) => state.global.stage);
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

  return <div>{renderStage()}</div>;
};
