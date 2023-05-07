import React from "react";

import "@Styles/common/block.css";

export const Block = ({ children, stage }) => {
  // const renderChildrens = () =>
  //   React.Children.map(children, (child) =>
  //     React.cloneElement(child, { extraProp: "test" })
  //   );

  const getClassName = (stage: string) => {
    switch (stage) {
      case "enter":
        return "block block_enter";
      case "chars":
        return "block block_chars";
      case "create":
        return "block block_create";
      default:
        return "block block_enter";
    }
  };

  return <div className={getClassName(stage)}>{children}</div>;
};
