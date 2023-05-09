import React from "react";

import { ICharBlockProps } from "@Types/components/chars/charBlock";
import { useSelector } from "react-redux";
import { IStore } from "store/store";
import { Header } from "./charBlock/Header";
import { ContentExist } from "./charBlock/ContentExist";
import { ContentToBuy } from "./charBlock/ContentToBuy";
import { Button } from "@Components/common/Button";
import "@Styles/chars/chars_content.css";

export const CharBlock = ({ isFirst, char }: ICharBlockProps) => {
  const charPrice = useSelector(
    (state: IStore) => state.global.playerInfo.charPrice
  );
  const openPrice = isFirst ? 0 : charPrice;

  const contentToDisplay = char ? (
    <ContentExist char={char} />
  ) : (
    <ContentToBuy />
  );

  return (
    <div className="chars_content_container">
      <Header charName={char?.charName} />
      <div className="chars_content_container chars_body_container">
        {contentToDisplay}
      </div>
      <Button
        text="Confirm"
        onClick={() =>
          char ? console.log("Chose this char") : console.log("Buy new char")
        }
      />
    </div>
  );
};
