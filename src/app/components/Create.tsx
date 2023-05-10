import React from "react";

import "@Styles/create/create_base.css";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";
import { Block } from "@Components/common/Block";
import { Button } from "@Components/common/Button";
import { Stages } from "@Components/create/Stages";
import { Parents } from "@Components/create/stages/Parents";
import { Clothing } from "@Components/create/stages/Clothing";
import { Apparence } from "@Components/create/stages/Apparence";

export const Create = () => {
  // Debug
  const debugMode = useSelector((state: IStore) => state.global.debugMode);
  //
  const [stage, setStage] = React.useState<
    "parents" | "clothing" | "apparence"
  >("parents");

  return (
    <div className={debugMode ? "create_debug_container" : "create_container"}>
      <Block stage="create">
        <Stages setStage={setStage} />
        <div className="create_content_container">
          <Parents stage={stage} />
          <Apparence stage={stage} />
          <Clothing stage={stage} />
        </div>
        <Button text="Finish" onClick={() => console.log("Finishing create")} />
      </Block>
    </div>
  );
};
