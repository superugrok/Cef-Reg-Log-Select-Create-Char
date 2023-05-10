import * as React from "react";
import {
  beards,
  brows,
  hairGrud,
  older,
  deffects,
  hairsMale,
  hairsFemale,
  hairColor,
  eyeColor,
  colorsList,
  pomada,
  cosmetics,
  rumyan,
  zagar,
  vesnushki,
} from "./dictionaries/apparenceDic";

// import { changeRangeValueItem } from "../../../../../utils/windowFuncs/stores/hairdresserShop/hairdresserShopWindowFuncs";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "@Types/store/store";

export const Switcher = (props: any) => {
  const dispatch = useDispatch();
  const value = useSelector(
    (state: IStore) => state.create.apparence[props.type]
  );

  // props.type - главный элемент логики, позволяет знать с каким свитчером идёт работа
  const dicCol = new Map([
    // Apparence
    ["hair", { dic: props.gender == "male" ? hairsMale : hairsFemale }],
    ["hairColor", { dic: hairColor }],
    ["beard", { dic: beards }],
    ["brows", { dic: brows }],
    ["hairGrud", { dic: hairGrud }],
    ["older", { dic: older }],
    ["deffects", { dic: deffects }],
    ["eyesColor", { dic: eyeColor }],
    ["browsColor", { dic: colorsList }],
    ["lipsColor", { dic: colorsList }],
    ["beardColor", { dic: colorsList }],
    ["faceColor", { dic: colorsList }],
    ["hairGrudColor", { dic: colorsList }],
    ["rumyanColor", { dic: colorsList }],
    ["pomada", { dic: pomada }],
    ["cosmetics", { dic: cosmetics }],
    ["rumyan", { dic: rumyan }],
    ["zagar", { dic: zagar }],
    ["rodinki", { dic: vesnushki }],
  ]);
  //@ts-ignore
  let dic: string[] = dicCol.get(props.type).dic;

  let mathVar: { [key: string]: Function } = {
    "+": function (a: number, b: number) {
      return a + b;
    },
    "-": function (a: number, b: number) {
      return a - b;
    },
  };
  const getMath = (act: boolean, index: number): number => {
    return act ? mathVar["+"](index, 1) : mathVar["-"](index, 1);
  }; // Математика как переменная

  const changeRangeValueItem = (dispatch, some) => {
    return;
  };

  // Switch forward and back actions
  const switchData = (move: boolean): void => {
    let element: any = document.getElementById(props.type);
    let index: number = dic.indexOf(element.textContent);
    let member: any = dic[getMath(move, index)];
    if (member) {
      // Check if next member exist
      changeRangeValueItem(dispatch, {
        value: member,
        type: props.type,
        translation: props.translation,
      });
    }
  };

  // Render
  return (
    <>
      <p className="switch_title">Title</p>
      <div className="switch_wrapper">
        <div
          className="switch_btn switch_left"
          onClick={() => switchData(false)}
        ></div>
        <p id={props.type} className="switch_content">
          {typeof value === "string" ? value : value.value}
        </p>
        <div
          className="switch_btn switch_right"
          onClick={() => switchData(true)}
        ></div>
      </div>
    </>
  );
};
