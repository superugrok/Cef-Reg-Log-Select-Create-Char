import React from "react";
import { ICharToBuyProps } from "@Types/components/chars/charContent";

export const ContentToBuy = ({ charCost, index }: ICharToBuyProps) => {
  return (
    <div className="chars_content_container">
      <span className="chars_content_description">
        After buying the slot, it will be yours for lifetime. You can create an
        new character.
      </span>
      <div className="chars_content_price_inner">
        <div className="chars_content_price_wrapper">
          <div className="chars_content_price_line"></div>
          <p className="chars_content_price_title">
            Cost: ${charCost || "Free"}
          </p>
          <div className="chars_content_price_line"></div>
        </div>
        <p
          style={{ opacity: index ? 1 : 0 }}
          className="chars_content_price_bonus"
        >
          VIP Gold Bonus for 1 month
        </p>
      </div>
    </div>
  );
};
