import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { goRandom } from "@Utils/create/randomFuncs";
import { IStore } from "@Types/store/store";

export const Random = () => {
  const dispatch = useDispatch();
  const debugMode = useSelector((state: IStore) => state.global.debugMode);
  const gender = useSelector((state: IStore) => state.create.parents.gender);
  const dayTime = useSelector((state: IStore) => state.global.time);
  const className = `btn_random ${
    dayTime == "day" ? "btn_random_day" : "btn_random_night"
  }`;

  return (
    <button
      className={className}
      onClick={() => goRandom(dispatch, gender, debugMode)}
    >
      Random
    </button>
  );
};
