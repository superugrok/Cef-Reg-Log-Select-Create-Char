import React from "react";
import { useDispatch } from "react-redux";
import { goRandom } from "@Utils/create/randomFuncs";

export const Random = () => {
  const dispatch = useDispatch();

  return (
    <button className="btn_random" onClick={() => goRandom(dispatch)}>
      Random
    </button>
  );
};
