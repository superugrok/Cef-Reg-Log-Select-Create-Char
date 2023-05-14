import React from "react";
import "@Styles/create/create_content.css";
import { IStagesProps } from "@Types/components/create/create";
import { stages } from "./dictionaries/stagesList";

export const Stages = ({ setStage, stage }: IStagesProps) => {
  const stagesContent: any = stages.map(({ type, img, title }) => (
    <button
      className={`create_content_btn create_content_btn_stages ${
        stage === type ? "create_content_btn--active" : ""
      }`}
      onClick={() => setStage(type)}
    >
      <img src={img} alt="" className="create_content_image" />
      <span>{title}</span>
    </button>
  ));

  return <div className="create_stages_container">{stagesContent}</div>;
};
