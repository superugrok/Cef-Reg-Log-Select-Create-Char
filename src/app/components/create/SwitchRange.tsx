import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@Types/store/store";
import { changeValue } from "@Store/actions/create";
import { ISwitchRangeProps } from "@Types/components/create/create";

export const SwitchRange = ({
  type,
  range,
  stage,
}: ISwitchRangeProps): JSX.Element => {
  // Debug mode
  const debugMode = useSelector((state: IStore) => state.global.debugMode);
  //
  const dispatch = useDispatch();
  const value = useSelector((state: IStore) => state.create[stage][type]);
  const currentState = useSelector((state: IStore) => state.create);
  const changeRange = (value: number, type: string) => {
    changeValue(dispatch, debugMode, { value, type, stage, currentState });
  };

  return (
    <div className="switch_wrapper">
      <input
        type="range"
        min={!range ? "-1" : "0"}
        max={!range ? "1" : "100"}
        step={!range ? "0.01" : "1"}
        value={value}
        className={!range ? "slider_new" : "slider"}
        onChange={(event: any) => changeRange(event.target.value, type)}
      />
      <div className={range ? "range_middleline" : null}></div>
    </div>
  );
};
