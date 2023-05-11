import React from "react";
import { queryGen } from "@Utils/create/queryGen";

import { parentsList } from "./dictionaries/parentsDic";
import { list } from "./dictionaries/apparenceDic";

export const Random = (props: any) => {
  const getRandomFloat = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const getRandomInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const goRandom = () => {
    let ranObj = {
      // Родители
      Mother: getRandomInRange(21, 41),
      Father: getRandomInRange(0, 20),
      // Ressemblance & Skin Tone
      Resemblance: getRandomInRange(0, 100),
      SkinTone: getRandomInRange(0, 100),
      // Apparence
      EyeColor: getRandomInRange(0, 31),
      HairColor: getRandomInRange(0, 64),
      Hair: getRandomInRange(0, 22),
      NoseWidth: getRandomFloat(-1, 1),
      NoseHeight: getRandomFloat(-1, 1),
      NoseLength: getRandomFloat(-1, 1),
      NoseBridge: getRandomFloat(-1, 1),
      NoseTip: getRandomFloat(-1, 1),
      NoseBridgeShift: getRandomFloat(-1, 1),
      BrowHeight: getRandomFloat(-1, 1),
      BrowWidth: getRandomFloat(-1, 1),
      CboneHeight: getRandomFloat(-1, 1),
      CboneWidth: getRandomFloat(-1, 1),
      CheekWidth: getRandomFloat(-1, 1),
      Eyes: getRandomFloat(-1, 1),
      Lips: getRandomFloat(-1, 1),
      JawWidth: getRandomFloat(-1, 1),
      ChinLength: getRandomFloat(-1, 1),
      ChinPos: getRandomFloat(-1, 1),
      ChinWidth: getRandomFloat(-1, 1),
      ChinShape: getRandomFloat(-1, 1),
      NeckWidth: getRandomFloat(-1, 1),
      Blemishes: getRandomInRange(0, 24),
      BlemishesOpacity: getRandomFloat(-1, 1),
      FacialHair: getRandomInRange(0, 29),
      FacialHairOpacity: getRandomFloat(-1, 1),
      Eyebrows: getRandomInRange(0, 34),
      EyebrowsOpacity: getRandomFloat(-1, 1),
      Ageing: getRandomInRange(0, 15),
      AgeingOpacity: getRandomFloat(-1, 1),
      Makeup: getRandomInRange(0, 16),
      MakeupOpacity: getRandomFloat(-1, 1),
      Blush: getRandomInRange(0, 7),
      BlushOpacity: getRandomFloat(-1, 1),
      Complexion: getRandomInRange(0, 12),
      ComplexionOpacity: getRandomFloat(-1, 1),
      Sundamage: getRandomInRange(0, 11),
      SundamageOpacity: getRandomFloat(-1, 1),
      Lipstick: getRandomInRange(0, 10),
      LipstickOpacity: getRandomFloat(-1, 1),
      Freckles: getRandomInRange(0, 18),
      FrecklesOpacity: getRandomFloat(-1, 1),
      ChestHair: getRandomInRange(0, 17),
      ChestHairOpacity: getRandomFloat(-1, 1),
      EyebrowColor: getRandomInRange(0, 64),
      BeardColor: getRandomInRange(0, 64),
      ChestHairColor: getRandomInRange(0, 64),
      BlushColor: getRandomInRange(0, 64),
      LipstickColor: getRandomInRange(0, 64),
    };
    let createStates = {
      parents: {
        gender: props.all.parents.gender,
        mother: parentsList.parentsFeDic[ranObj.Mother - 21],
        father: parentsList.parentsMaDic[ranObj.Father],
      },
      ressemblance: {
        resValue: ranObj.Resemblance,
        skinValue: ranObj.SkinTone,
      },
      apparence: {
        // Причёска
        hair:
          props.all.parents.gender == "Мужской"
            ? list.hairsMale[ranObj.Hair]
            : list.hairsFemale[ranObj.Hair],
        hairColor: list.hairColor[ranObj.HairColor],
        // Глаза
        eyes: ranObj.Eyes,
        eyesColor: list.eyeColor[ranObj.EyeColor],
        // Брови
        brows: list.brows[ranObj.Eyebrows],
        browsHeight: ranObj.BrowHeight,
        browsWidth: ranObj.BrowWidth,
        browsColor: list.colorsList[ranObj.EyebrowColor],
        browsTp: ranObj.EyebrowsOpacity,
        // Нос и переносица
        noseWidth: ranObj.NoseWidth,
        noseHeight: ranObj.NoseHeight,
        noseLength: ranObj.NoseLength,
        noseBridge: ranObj.NoseBridge, // Кончик носа
        noseTip: ranObj.NoseTip, // Тип переносицы
        noseBridgeShift: ranObj.NoseBridgeShift, // Сдвиг переносицы
        // Черты лица
        cboneHeight: ranObj.CboneHeight, // Высота скул
        cboneWidth: ranObj.CboneWidth, // Ширина скул
        cheekWidth: ranObj.CheekWidth, // Ширина щёк
        jawWidth: ranObj.JawWidth, // Ширина челюсти
        chinLength: ranObj.ChinLength, // Длина подобродка
        chinWidth: ranObj.ChinWidth, // Ширина подбородка
        chinPos: ranObj.ChinPos, // Положение подбородка
        chinShape: ranObj.ChinShape, // Форма подбородка
        neckWidth: ranObj.NeckWidth, // Ширина шеи
        // Губы
        lips: ranObj.Lips, // Тип губ
        lipsColor: list.colorsList[ranObj.LipstickColor],
        pomada: list.pomada[ranObj.Lipstick],
        pomadaTp: ranObj.LipstickOpacity,
        // Борода
        beard: list.beards[ranObj.FacialHair],
        beardColor: list.colorsList[ranObj.BeardColor],
        beardTp: ranObj.FacialHairOpacity,
        // Приметы
        faceColor: list.faceColor[ranObj.Complexion],
        faceColorTp: ranObj.ComplexionOpacity,
        hairGrud: list.hairGrud[ranObj.ChestHair],
        hairGrudColor: list.colorsList[ranObj.ChestHairColor],
        hairGrudTp: ranObj.ChestHairOpacity,
        older: list.older[ranObj.Ageing],
        olderTp: ranObj.AgeingOpacity,
        deffects: list.deffects[ranObj.Blemishes],
        deffectsTp: ranObj.BlemishesOpacity,
        // Особенности
        cosmetics: list.cosmetics[ranObj.Makeup],
        cosmeticsTp: ranObj.MakeupOpacity,
        rumyan: list.rumyan[ranObj.Blush],
        rumyanColor: list.colorsList[ranObj.BlushColor],
        rumyanTp: ranObj.BlushOpacity,
        zagar: list.zagar[ranObj.Sundamage],
        zagarTp: ranObj.SundamageOpacity,
        rodinki: list.vesnushki[ranObj.Freckles],
        rodinkiTp: ranObj.FrecklesOpacity,
      },
    };
    props.createChar(createStates, "reset");
    queryGen(props.all, "random", false, false, ranObj);
  };

  return (
    <button className="btn_random" onClick={() => goRandom()}>
      Случайно
    </button>
  );
};
