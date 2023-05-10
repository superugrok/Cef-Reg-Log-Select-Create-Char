import React from "react";
import { IStagesProps } from "@Types/components/create/create";

export const Stages = ({ setStage }: IStagesProps) => {
  return (
    <div className="create_stages_container">
      <button onClick={() => setStage("parents")}>Parents</button>
      <button onClick={() => setStage("apparence")}>Apparence</button>
      <button onClick={() => setStage("clothing")}>Clothing</button>
    </div>
  );
};
