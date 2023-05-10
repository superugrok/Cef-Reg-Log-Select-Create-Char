import React from "react";
import "@Styles/create/create_content.css";
import { IStagesProps } from "@Types/components/create/create";
import imgApparence from "@Images/create/apparence.png";
import imgClothing from "@Images/create/clothing.png";
import imgParents from "@Images/create/origin.png";

export const Stages = ({ setStage, stage }: IStagesProps) => {
  return (
    <div className="create_stages_container">
      <button
        className={`create_content_btn ${
          stage === "parents" ? "create_content_btn--active" : ""
        }`}
        onClick={() => setStage("parents")}
      >
        <img src={imgParents} alt="" className="create_content_image" />
        <span>Parents</span>
      </button>
      <button
        className={`create_content_btn ${
          stage === "apparence" ? "create_content_btn--active" : ""
        }`}
        onClick={() => setStage("apparence")}
      >
        <img src={imgApparence} alt="" className="create_content_image" />
        <span>Apparence</span>
      </button>
      <button
        className={`create_content_btn ${
          stage === "clothing" ? "create_content_btn--active" : ""
        }`}
        onClick={() => setStage("clothing")}
      >
        <img src={imgClothing} alt="" className="create_content_image" />
        <span>Clothing</span>
      </button>
    </div>
  );
};
