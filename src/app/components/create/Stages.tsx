import React from "react";

export const Stages = ({ setStage }) => {
  return (
    <div className="create_stages_container">
      <button onClick={() => setStage("parents")}>Parents</button>
      <button onClick={() => setStage("apparence")}>Apparence</button>
      <button onClick={() => setStage("clothing")}>Clothing</button>
    </div>
  );
};
