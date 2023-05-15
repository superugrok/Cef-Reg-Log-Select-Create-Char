import React from "react";
import "@Styles/create/create_content.css";
import { IStagesProps } from "@Types/components/create/create";
import { stages } from "./dictionaries/stagesList";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";

export const Stages = ({ setStage, stage }: IStagesProps) => {
  const dayTime = useSelector((state: IStore) => state.global.time);
  const btnClassName =
    dayTime == "day" ? "create_content_btn_day" : "create_content_btn_night";
  const activeClassName =
    dayTime == "day"
      ? "create_content_btn--active_day"
      : "create_content_btn--active_night";

  const stagesContent: any = stages.map(({ type, img, title }) => (
    <button
      className={`create_content_btn ${btnClassName} create_content_btn_stages ${
        stage === type ? activeClassName : ""
      }`}
      onClick={() => setStage(type)}
    >
      <img src={img} alt="" className="create_content_image" />
      <span>{title}</span>
    </button>
  ));

  return <div className="create_stages_container">{stagesContent}</div>;
};
