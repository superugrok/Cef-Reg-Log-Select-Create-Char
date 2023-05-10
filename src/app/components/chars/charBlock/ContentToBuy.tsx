import React from "react";

export const ContentToBuy = () => {
  const price = 1000;
  return (
    <div className="chars_content_container">
      <span className="chars_content_description">
        When buying slots, you get forever, in it you can create new character.
      </span>
      <div className="chars_content_price_inner">
        <div className="chars_content_price_wrapper">
          <div className="chars_content_price_line"></div>
          <p className="chars_content_price_title">Cost: ${price}</p>
          <div className="chars_content_price_line"></div>
        </div>
        <p className="chars_content_price_bonus">VIP Gold Bonus for 1 month</p>
      </div>
    </div>
  );
};
