import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultState } from "@Store/actions/create";
import { IStore } from "@Types/store/store";

export const Reset = () => {
  const dispatch = useDispatch();
  const debugMode = useSelector((state: IStore) => state.global.debugMode);

  return (
    <button
      className="btn_reset"
      onClick={() => setDefaultState(dispatch, debugMode)}
    >
      Reset
    </button>
  );
};
