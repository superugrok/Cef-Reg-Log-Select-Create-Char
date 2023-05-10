import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";
import "@Styles/chars/chars_base.css";

import { Logo } from "@Components/common/Logo";
import { Block } from "@Components/common/Block";
import { CharBlock } from "@Components/chars/CharBlock";
import { Email } from "@Components/chars/Email";

export const Chars = () => {
  const dayTime = useSelector((state: IStore) => state.global.time);
  const getBackground = () => (dayTime === "day" ? "bg bg-day" : "bg bg-night");

  const chars = useSelector(
    (state: IStore) => state.global.playerInfo.charsInfo
  );
  const blocks = chars.map((char, i) => (
    <Block key={i} stage="chars">
      <CharBlock index={i} char={char} />
    </Block>
  ));

  return (
    <div className={getBackground()}>
      <div className="chars_logo_container">
        <Logo stage={"chars"} />
        <Email />
      </div>
      <div className="chars_blocks_container">{blocks}</div>
    </div>
  );
};
