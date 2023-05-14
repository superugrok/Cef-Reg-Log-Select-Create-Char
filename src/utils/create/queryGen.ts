import { parentsList } from "@Components/create/dictionaries/parentsDic";
import { list } from "@Components/create/dictionaries/apparenceDic";
import { ICreateReducer } from "store/create";

const getInt = (word: string, dic: string[], dicInt: number[] | boolean[]) => {
  let wordIndex = dic.indexOf(word);
  return dicInt[wordIndex];
};

export const queryGen = (
  currentState: ICreateReducer,
  action: "change" | "gender" | "finish",
  changeType?: string,
  changeValue?: string | number,
  name?: string,
  debugMode?: boolean
) => {
  const state = {
    ...currentState.parents,
    ...currentState.apparence,
  };
  const gender = state.gender;
  if (changeType) state[changeType] = changeValue;

  const finishState: { [key: string]: number | boolean } = {
    // Родители
    Mother: getInt(state.mother, parentsList.parentsFeDic, parentsList.mothers),
    Father: getInt(state.father, parentsList.parentsMaDic, parentsList.fathers),
    // Ressemblance & Skin Tone
    Resemblance: state.resValue,
    SkinTone: state.skinValue,
    // Apparence
    EyeColor: getInt(state.eyesColor, list.eyeColor, list.eyeColorId),
    HairColor: getInt(state.hairColor, list.hairColor, list.hairColorId),
    Hair: getInt(
      state.hair,
      gender == "Male" ? list.hairsMale : list.hairsFemale,
      gender == "Male" ? list.hairsMaleId : list.hairsFemaleId
    ),
    NoseWidth: state.noseWidth,
    NoseHeight: state.noseHeight,
    NoseLength: state.noseLength,
    NoseBridge: state.noseBridge,
    NoseTip: state.noseTip,
    NoseBridgeShift: state.noseBridgeShift,
    BrowHeight: state.browsHeight,
    BrowWidth: state.browsWidth,
    CboneHeight: state.cboneHeight,
    CboneWidth: state.cboneWidth,
    CheekWidth: state.cheekWidth,
    Eyes: state.eyes,
    Lips: state.lips,
    JawWidth: state.jawWidth,
    ChinLength: state.chinLength,
    ChinPos: state.chinPos,
    ChinWidth: state.chinWidth,
    ChinShape: state.chinShape,
    NeckWidth: state.neckWidth,
    Blemishes: getInt(state.deffects, list.deffects, list.deffectsId),
    BlemishesOpacity: state.deffectsTp,
    FacialHair: getInt(state.beard, list.beards, list.beardsId),
    FacialHairOpacity: state.beardTp,
    Eyebrows: getInt(state.brows, list.brows, list.browsId),
    EyebrowsOpacity: state.browsTp,
    Ageing: getInt(state.older, list.older, list.olderId),
    AgeingOpacity: state.olderTp,
    Makeup: getInt(state.cosmetics, list.cosmetics, list.cosmeticsId),
    MakeupOpacity: state.cosmeticsTp,
    Blush: getInt(state.rumyan, list.rumyan, list.rumyanId),
    BlushOpacity: state.rumyanTp,
    Complexion: getInt(state.faceColor, list.faceColor, list.faceColorId),
    ComplexionOpacity: state.faceColorTp,
    Sundamage: getInt(state.zagar, list.zagar, list.zagarId),
    SundamageOpacity: state.zagarTp,
    Lipstick: getInt(state.pomada, list.pomada, list.pomadaId),
    LipstickOpacity: state.pomadaTp,
    Freckles: getInt(state.rodinki, list.vesnushki, list.vesnushkiId),
    FrecklesOpacity: state.rodinkiTp,
    ChestHair: getInt(state.hairGrud, list.hairGrud, list.hairGrudId),
    ChestHairOpacity: state.hairGrudTp,
    EyebrowColor: getInt(state.browsColor, list.colorsList, list.colorsListId),
    BeardColor: getInt(state.beardColor, list.colorsList, list.colorsListId),
    ChestHairColor: getInt(
      state.hairGrudColor,
      list.colorsList,
      list.colorsListId
    ),
    BlushColor: getInt(state.rumyanColor, list.colorsList, list.colorsListId),
    LipstickColor: getInt(state.lipsColor, list.colorsList, list.colorsListId),
  };

  switch (action) {
    case "change":
      {
        debugMode
          ? console.log(JSON.stringify(finishState))
          : mp.trigger(
              "cef_cl_changeCharacterCustomization",
              JSON.stringify(finishState)
            );
      }
      break;
    case "gender":
      {
        debugMode
          ? console.log(
              getInt(gender, parentsList.gender, parentsList.genderId)
            )
          : mp.trigger(
              "cef_cl_changeSex",
              getInt(gender, parentsList.gender, parentsList.genderId)
            );
      }
      break;
    case "finish":
      {
        debugMode
          ? console.log(JSON.stringify(finishState) + name)
          : mp.trigger(
              "cef_cl_saveCharacter",
              JSON.stringify(finishState),
              name
            );
      }
      break;
  }
};
