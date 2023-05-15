import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultState } from "@Store/actions/create";
import { IStore } from "@Types/store/store";

export const Reset = () => {
  const dispatch = useDispatch();
  const debugMode = useSelector((state: IStore) => state.global.debugMode);
  const dayTime = useSelector((state: IStore) => state.global.time);
  const className = `btn_reset ${
    dayTime == "day" ? "btn_reset_day" : "btn_reset_night"
  }`;

  return (
    <button
      className={className}
      onClick={() => setDefaultState(dispatch, debugMode)}
    >
      Reset
    </button>
  );
};
