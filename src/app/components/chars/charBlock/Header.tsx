import React from "react";

import { IHeaderProps } from "@Types/components/chars/charBlock";
import CharExist from "@Images/chars/charblock_active.png";
import CharToBuy from "@Images/chars/charblock_tobuy.png";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";

export const Header = ({ charName }: IHeaderProps) => {
  const dayTime = useSelector((state: IStore) => state.global.time);
  const activeClassName =
    dayTime == "day"
      ? "chars_header_title_active_day"
      : "chars_header_title_active_night";
  const noActiveClassName =
    dayTime == "day"
      ? "chars_header_title_noactive_day"
      : "chars_header_title_noactive_night";

  const image = <img src={charName ? CharExist : CharToBuy}></img>;
  const title = (
    <span
      className={`chars_header_title ${
        charName ? activeClassName : noActiveClassName
      }`}
    >
      {charName || "Slot does not active"}
    </span>
  );

  return (
    <div className="chars_content_container chars_header_container">
      {image}
      {title}
    </div>
  );
};
