import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { goRandom } from "@Utils/create/randomFuncs";
import { IStore } from "@Types/store/store";

export const Random = () => {
  const dispatch = useDispatch();
  const gender = useSelector((state: IStore) => state.create.parents.gender);

  return (
    <button className="btn_random" onClick={() => goRandom(dispatch, gender)}>
      Random
    </button>
  );
};
