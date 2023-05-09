import React from "react";

import { IHeaderProps } from "@Types/components/chars/charBlock";
import CharExist from "@Images/chars/charblock_active.png";
import CharToBuy from "@Images/chars/charblock_tobuy.png";

export const Header = ({ charName }: IHeaderProps) => {
  const image = <img src={charName ? CharExist : CharToBuy}></img>;
  const title = (
    <span
      className={`chars_header_title ${
        charName ? "chars_header_title_active" : "chars_header_title_noactive"
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
