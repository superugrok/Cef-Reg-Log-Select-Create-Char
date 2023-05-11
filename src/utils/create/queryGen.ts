import { parentsList } from "@Components/create/dictionaries/parentsDic";
import { list } from "@Components/create/dictionaries/apparenceDic";

const getInt = (word: string, dic: string[], dicInt: number[] | boolean[]) => {
  let wordIndex = dic.indexOf(word);
  return dicInt[wordIndex];
};

export const queryGen = (
  props: any,
  action: string,
  type?: string | boolean,
  changes?: string | number | boolean,
  ranObj?: object | boolean,
  name?: string
) => {
  let midObj: { [key: string]: any } = {
    ...props.parents,
    ...props.ressemblance,
    ...props.apparence,
  };
  if (type) midObj[`${type}`] = changes;
  let genderVal = midObj.gender;
  const finishStates: { [key: string]: number | boolean } = {
    // Родители
    Mother: getInt(
      midObj.mother,
      parentsList.parentsFeDic,
      parentsList.mothers
    ),
    Father: getInt(
      midObj.father,
      parentsList.parentsMaDic,
      parentsList.fathers
    ),
    // Ressemblance & Skin Tone
    Resemblance: midObj.resValue,
    SkinTone: midObj.skinValue,
    // Apparence
    EyeColor: getInt(midObj.eyesColor, list.eyeColor, list.eyeColorId),
    HairColor: getInt(midObj.hairColor, list.hairColor, list.hairColorId),
    Hair: getInt(
      midObj.hair,
      genderVal == "Мужской" ? list.hairsMale : list.hairsFemale,
      genderVal == "Мужской" ? list.hairsMaleId : list.hairsFemaleId
    ),
    NoseWidth: midObj.noseWidth,
    NoseHeight: midObj.noseHeight,
    NoseLength: midObj.noseLength,
    NoseBridge: midObj.noseBridge,
    NoseTip: midObj.noseTip,
    NoseBridgeShift: midObj.noseBridgeShift,
    BrowHeight: midObj.browsHeight,
    BrowWidth: midObj.browsWidth,
    CboneHeight: midObj.cboneHeight,
    CboneWidth: midObj.cboneWidth,
    CheekWidth: midObj.cheekWidth,
    Eyes: midObj.eyes,
    Lips: midObj.lips,
    JawWidth: midObj.jawWidth,
    ChinLength: midObj.chinLength,
    ChinPos: midObj.chinPos,
    ChinWidth: midObj.chinWidth,
    ChinShape: midObj.chinShape,
    NeckWidth: midObj.neckWidth,
    Blemishes: getInt(midObj.deffects, list.deffects, list.deffectsId),
    BlemishesOpacity: midObj.deffectsTp,
    FacialHair: getInt(midObj.beard, list.beards, list.beardsId),
    FacialHairOpacity: midObj.beardTp,
    Eyebrows: getInt(midObj.brows, list.brows, list.browsId),
    EyebrowsOpacity: midObj.browsTp,
    Ageing: getInt(midObj.older, list.older, list.olderId),
    AgeingOpacity: midObj.olderTp,
    Makeup: getInt(midObj.cosmetics, list.cosmetics, list.cosmeticsId),
    MakeupOpacity: midObj.cosmeticsTp,
    Blush: getInt(midObj.rumyan, list.rumyan, list.rumyanId),
    BlushOpacity: midObj.rumyanTp,
    Complexion: getInt(midObj.faceColor, list.faceColor, list.faceColorId),
    ComplexionOpacity: midObj.faceColorTp,
    Sundamage: getInt(midObj.zagar, list.zagar, list.zagarId),
    SundamageOpacity: midObj.zagarTp,
    Lipstick: getInt(midObj.pomada, list.pomada, list.pomadaId),
    LipstickOpacity: midObj.pomadaTp,
    Freckles: getInt(midObj.rodinki, list.vesnushki, list.vesnushkiId),
    FrecklesOpacity: midObj.rodinkiTp,
    ChestHair: getInt(midObj.hairGrud, list.hairGrud, list.hairGrudId),
    ChestHairOpacity: midObj.hairGrudTp,
    EyebrowColor: getInt(midObj.browsColor, list.colorsList, list.colorsListId),
    BeardColor: getInt(midObj.beardColor, list.colorsList, list.colorsListId),
    ChestHairColor: getInt(
      midObj.hairGrudColor,
      list.colorsList,
      list.colorsListId
    ),
    BlushColor: getInt(midObj.rumyanColor, list.colorsList, list.colorsListId),
    LipstickColor: getInt(midObj.lipsColor, list.colorsList, list.colorsListId),
  };

  switch (action) {
    case "mid":
      //@ts-ignore
      mp.trigger(
        "cef_cl_changeCharacterCustomization",
        JSON.stringify(finishStates)
      );
      break;
    case "gender":
      //@ts-ignore
      mp.trigger("cef_cl_changeSex", getInt(genderVal, gender, genderId));
      break;
    case "finish":
      //@ts-ignore
      mp.trigger("cef_cl_saveCharacter", JSON.stringify(finishStates), name);
      break;
    case "random":
      //@ts-ignore
      mp.trigger("cef_cl_changeCharacterCustomization", JSON.stringify(ranObj));
      break;
  }
};
