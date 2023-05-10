import * as React from "react";
// import { changeRangeValueItem } from "@utils/windowFuncs/stores/hairdresserShop/hairdresserShopWindowFuncs";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@Types/store/store";

export const SwitchRange = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const value = useSelector(
    (state: IStore) => state.create.apparence[props.type]
  );
  let ran: boolean = props.range;

  const changeRangeValueItem = (dispatch, some) => {
    return;
  };

  const changeRange = (value: number, type: string, translation: string) => {
    changeRangeValueItem(dispatch, { value, type, translation });
  };

  return (
    <>
      <p className="switch_title">Title</p>
      <div className="switch_wrapper">
        <input
          type="range"
          min={ran ? "-1" : "0"}
          max={ran ? "1" : "100"}
          step={ran ? "0.01" : "1"}
          value={value.value || value}
          className={ran ? "slider_new" : "slider"}
          onChange={(event: any) =>
            changeRange(event.target.value, props.type, props.translation)
          }
        />
        <div className={!ran ? "range_middleline" : null}></div>
      </div>
    </>
  );
};
