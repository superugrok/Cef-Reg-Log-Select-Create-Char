import React from "react";

import { ICharBlockProps } from "@Types/components/chars/charBlock";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "store/store";
import { Header } from "./charBlock/Header";
import { ContentExist } from "./charBlock/ContentExist";
import { ContentToBuy } from "./charBlock/ContentToBuy";
import { Button } from "@Components/common/Button";
import "@Styles/chars/chars_content.css";
import { changeCurrentStage } from "@Store/actions/global";

export const CharBlock = ({ index, char }: ICharBlockProps) => {
  // Debug mode
  const debugMode = useSelector((state: IStore) => state.global.debugMode);
  //
  const dispatch = useDispatch();
  const charPrice = useSelector(
    (state: IStore) => state.global.playerInfo.charPrice
  );
  const userEmail = useSelector(
    (state: IStore) => state.global.playerInfo.email
  );
  // Get first char bank count, second slot cost first char's bank money.
  const firstCharBank =
    useSelector(
      (state: IStore) => state.global.playerInfo.charsInfo[0]?.bankMoney
    ) || 0;
  // Check if there is first slot, if so - open price is 0
  const openPrice = !Boolean(index) ? 0 : charPrice;

  const contentToDisplay = char ? (
    <ContentExist char={char} />
  ) : (
    <ContentToBuy charCost={openPrice} index={index} />
  );

  // *** Window funcs ***
  // @ts-ignore
  window.goCreate = () => {
    changeCurrentStage("create", dispatch);
  };

  return (
    <div className="chars_content_container">
      <Header charName={char?.charName} />
      <div className="chars_content_container chars_body_container">
        {contentToDisplay}
      </div>
      <Button
        text="Confirm"
        disabled={openPrice > firstCharBank && !char}
        onClick={() =>
          debugMode
            ? changeCurrentStage("create", dispatch)
            : char
            ? console.log(`Choose char ${char.charName} on ${userEmail}`)
            : console.log(
                `Buying slot number ${index} for ${openPrice} on ${userEmail}`
              )
        }
      />
    </div>
  );
};
