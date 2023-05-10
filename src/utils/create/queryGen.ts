import {
  parentsFeDic,
  parentsMaDic,
  fathers,
  mothers,
  gender,
  genderId,
} from "@Components/create/dictionaries/parentsDic";
import {
  beards,
  beardsId,
  brows,
  browsId,
  hairGrud,
  hairGrudId,
  older,
  olderId,
  deffects,
  deffectsId,
  hairsMale,
  hairsFemale,
  hairsMaleId,
  hairsFemaleId,
  hairColor,
  hairColorId,
  eyeColor,
  eyeColorId,
  colorsList,
  colorsListId,
  pomada,
  pomadaId,
  cosmetics,
  cosmeticsId,
  rumyan,
  rumyanId,
  zagar,
  zagarId,
  vesnushki,
  vesnushkiId,
  faceColor,
  faceColorId,
} from "@Components/create/dictionaries/apparenceDic";

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
    Mother: getInt(midObj.mother, parentsFeDic, mothers),
    Father: getInt(midObj.father, parentsMaDic, fathers),
    // Ressemblance & Skin Tone
    Resemblance: midObj.resValue,
    SkinTone: midObj.skinValue,
    // Apparence
    EyeColor: getInt(midObj.eyesColor, eyeColor, eyeColorId),
    HairColor: getInt(midObj.hairColor, hairColor, hairColorId),
    Hair: getInt(
      midObj.hair,
      genderVal == "Мужской" ? hairsMale : hairsFemale,
      genderVal == "Мужской" ? hairsMaleId : hairsFemaleId
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
    Blemishes: getInt(midObj.deffects, deffects, deffectsId),
    BlemishesOpacity: midObj.deffectsTp,
    FacialHair: getInt(midObj.beard, beards, beardsId),
    FacialHairOpacity: midObj.beardTp,
    Eyebrows: getInt(midObj.brows, brows, browsId),
    EyebrowsOpacity: midObj.browsTp,
    Ageing: getInt(midObj.older, older, olderId),
    AgeingOpacity: midObj.olderTp,
    Makeup: getInt(midObj.cosmetics, cosmetics, cosmeticsId),
    MakeupOpacity: midObj.cosmeticsTp,
    Blush: getInt(midObj.rumyan, rumyan, rumyanId),
    BlushOpacity: midObj.rumyanTp,
    Complexion: getInt(midObj.faceColor, faceColor, faceColorId),
    ComplexionOpacity: midObj.faceColorTp,
    Sundamage: getInt(midObj.zagar, zagar, zagarId),
    SundamageOpacity: midObj.zagarTp,
    Lipstick: getInt(midObj.pomada, pomada, pomadaId),
    LipstickOpacity: midObj.pomadaTp,
    Freckles: getInt(midObj.rodinki, vesnushki, vesnushkiId),
    FrecklesOpacity: midObj.rodinkiTp,
    ChestHair: getInt(midObj.hairGrud, hairGrud, hairGrudId),
    ChestHairOpacity: midObj.hairGrudTp,
    EyebrowColor: getInt(midObj.browsColor, colorsList, colorsListId),
    BeardColor: getInt(midObj.beardColor, colorsList, colorsListId),
    ChestHairColor: getInt(midObj.hairGrudColor, colorsList, colorsListId),
    BlushColor: getInt(midObj.rumyanColor, colorsList, colorsListId),
    LipstickColor: getInt(midObj.lipsColor, colorsList, colorsListId),
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
