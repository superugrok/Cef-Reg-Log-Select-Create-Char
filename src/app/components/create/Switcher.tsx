import React from "react";
import { list } from "./dictionaries/apparenceDic";

import { parentsList } from "./dictionaries/parentsDic";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "@Types/store/store";
import { changeValue } from "@Store/actions/create";
import { setDefaultState } from "@Store/actions/create";
import { ISwitcherProps } from "@Types/components/create/create";

export const Switcher = ({ stage, type }: ISwitcherProps) => {
  const dispatch = useDispatch();
  const debugMode = useSelector((state: IStore) => state.global.debugMode);
  const value = useSelector((state: IStore) => state.create[stage][type]);
  const gender = useSelector((state: IStore) => state.create.parents.gender);
  const currentState = useSelector((state: IStore) => state.create);

  // props.type - главный элемент логики, позволяет знать с каким свитчером идёт работа
  const dicCol = new Map([
    // Parents
    ["gender", { dic: parentsList.gender }],
    ["mother", { dic: parentsList.parentsFeDic }],
    ["father", { dic: parentsList.parentsMaDic }],
    // Apparence
    ["hair", { dic: gender == "Male" ? list.hairsMale : list.hairsFemale }],
    ["hairColor", { dic: list.hairColor }],
    ["beard", { dic: list.beards }],
    ["brows", { dic: list.brows }],
    ["hairGrud", { dic: list.hairGrud }],
    ["older", { dic: list.older }],
    ["deffects", { dic: list.deffects }],
    ["eyesColor", { dic: list.eyeColor }],
    ["browsColor", { dic: list.colorsList }],
    ["lipsColor", { dic: list.colorsList }],
    ["beardColor", { dic: list.colorsList }],
    ["faceColor", { dic: list.faceColor }],
    ["hairGrudColor", { dic: list.colorsList }],
    ["rumyanColor", { dic: list.colorsList }],
    ["pomada", { dic: list.pomada }],
    ["cosmetics", { dic: list.cosmetics }],
    ["rumyan", { dic: list.rumyan }],
    ["zagar", { dic: list.zagar }],
    ["rodinki", { dic: list.vesnushki }],
  ]);
  let dic: string[] = dicCol.get(type).dic;

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

  // Switch forward and back actions
  const switchData = (move: boolean): void => {
    let element: any = document.getElementById(type);
    let index: number = dic.indexOf(element.textContent);
    let member: any = dic[getMath(move, index)];
    if (member) {
      type == "gender" && setDefaultState(dispatch, debugMode);
      // Check if next member exist
      changeValue(dispatch, debugMode, {
        value: member,
        type,
        stage,
        currentState,
      });
    }
  };

  // Render
  return (
    <div className="switch_wrapper">
      <div
        className="switch_btn switch_left"
        onClick={() => switchData(false)}
      ></div>
      <p id={type} className="switch_content">
        {value}
      </p>
      <div
        className="switch_btn switch_right"
        onClick={() => switchData(true)}
      ></div>
    </div>
  );
};
