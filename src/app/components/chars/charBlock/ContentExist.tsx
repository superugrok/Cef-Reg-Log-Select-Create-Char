import React from "react";
import cashImg from "@Images/chars/cash.png";

export const ContentExist = ({ char }) => {
  return (
    <div className="chars_content_container">
      <div className="chars_content_cash_container">
        <div className="chars_content_cash_section">
          <img src={cashImg} />
          <span>2500$</span>
        </div>
        <div className="chars_content_line_center"></div>
        <div className="chars_content_cash_section">
          <img src={cashImg} />
          <span>2500$</span>
        </div>
      </div>
    </div>
  );
};
