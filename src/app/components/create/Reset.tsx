import React from "react";
import { useDispatch } from "react-redux";
import { setDefaultState } from "@Store/actions/create";

export const Reset = () => {
  const dispatch = useDispatch();

  return (
    <button className="btn_reset" onClick={() => setDefaultState(dispatch)}>
      Reset
    </button>
  );
};
