import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";

export const Chars = () => {
  const dayTime = useSelector((state: IStore) => state.global.time);
  const getBackground = () => (dayTime === "day" ? "bg bg-day" : "bg bg-night");

  return <div className={getBackground()}>Chars</div>;
};
