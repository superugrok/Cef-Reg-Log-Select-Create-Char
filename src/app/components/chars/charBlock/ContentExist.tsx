import React from "react";
import cashImg from "@Images/chars/cash.png";
import { ICharExistProps } from "@Types/components/chars/charContent";
import { format } from "d3-format";

export const ContentExist = ({ char }: ICharExistProps) => {
  const cashSum = format("$,")(char.personalMoney);
  const bankSum = format("$,")(char.bankMoney);

  const charData = [
    {
      title: "Job",
      value: char.job,
    },
    {
      title: "Level",
      value: char.level,
    },
    {
      title: "Faction",
      value: char.faction,
    },
    {
      title: "Last seen",
      value: char.lastSeen,
    },
  ];
  const charInfo = charData.map((data) => (
    <div className="chars_content_info_section">
      <span>{data.title}</span>
      <div className="char_info_section_line"></div>
      <span>{data.value}</span>
      <div className="char_info_section_line_right"></div>
    </div>
  ));

  return (
    <div className="chars_content_container">
      <div className="chars_content_cash_container">
        <div className="chars_content_cash_section">
          <img src={cashImg} />
          <span>{cashSum}</span>
        </div>
        <div className="chars_content_line_center"></div>
        <div className="chars_content_cash_section">
          <img src={cashImg} />
          <span>{bankSum}</span>
        </div>
      </div>
      <div className="chars_content_container">{charInfo}</div>
    </div>
  );
};
