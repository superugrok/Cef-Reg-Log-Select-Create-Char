import React, { FormEvent } from "react";

import "@Styles/create/create_base.css";
import "@Styles/create/create_helper.css";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";
import { Block } from "@Components/common/Block";
import { Button } from "@Components/common/Button";
import { Stages } from "@Components/create/Stages";
import { Parents } from "@Components/create/stages/Parents";
import { Clothing } from "@Components/create/stages/Clothing";
import { Apparence } from "@Components/create/stages/Apparence";
import { Random } from "./create/Random";
import { Reset } from "./create/Reset";
import { Modal } from "./common/Modal";
import { Input } from "./common/Input";
import { Error } from "./common/Error";
import { inputLiveValidate } from "@Utils/inputLiveValidate";
import { validateValue } from "@Utils/validateInput";

export const Create = () => {
  // Debug
  const debugMode = useSelector((state: IStore) => state.global.debugMode);
  //
  const createState = useSelector((state: IStore) => state.create);
  const [stage, setStage] = React.useState<
    "parents" | "clothing" | "apparence"
  >("parents");
  const [modal, setModal] = React.useState(false);
  const [error, setError] = React.useState(null);
  const playerRef = React.useRef(null);

  const getStage = (stage: "parents" | "clothing" | "apparence") => {
    switch (stage) {
      case "apparence":
        return <Apparence stage={stage} />;
      case "clothing":
        return <Clothing stage={stage} />;
      case "parents":
        return <Parents stage={stage} />;
    }
  };

  const finishCreate = () => {
    const playerName = playerRef.current.value.trim();
    const isPlayerValid = validateValue(playerName, "player");
    if (isPlayerValid) {
      console.log(createState);
      setModal(false);
    } else setError("Player name is invalid");
  };

  const modalContnet = (
    <div>
      <h2 className="modal_hover">Задайте имя персонажу</h2>
      <p className="modal_p">
        Обратите внимание, что в будущем Вы не сможете изменить большинство
        параметров.
      </p>
      <form onSubmit={(e: FormEvent) => e.preventDefault()}>
        <div className="modal_create_input_container">
          <Error errorText={error} setError={setError} />
          <Input
            inputRef={playerRef}
            validate={true}
            type="player"
            placeholder="Vasil Sversky"
            onChange={inputLiveValidate}
          />
        </div>
        <Button text="Finish" onClick={() => finishCreate()} />
      </form>
    </div>
  );

  return (
    <div className={debugMode ? "create_debug_container" : "create_container"}>
      <Modal content={modalContnet} visible={modal} setVisible={setModal} />
      <Block stage="create">
        <Stages setStage={setStage} stage={stage} />
        <div className="create_top_buttons">
          <Random />
          <Reset />
        </div>
        {/* <div className="create_content_container">
          <Parents stage={stage} />
          <Apparence stage={stage} />
          <Clothing stage={stage} />
        </div> */}
        {
          // Those components supports "always in dom" mode. Disabled for now because of "uncontrolled inputs" silly error.
        }
        <div className="create_content_container">{getStage(stage)}</div>
        <Button text="Finish" onClick={() => setModal(true)} />
      </Block>
    </div>
  );
};
