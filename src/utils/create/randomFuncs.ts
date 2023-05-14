import { parentsList } from "@Components/create/dictionaries/parentsDic";
import { list } from "@Components/create/dictionaries/apparenceDic";
import { ICreateReducer } from "@Types/store/create";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setRandom } from "@Store/actions/create";
import { queryGen } from "./queryGen";

const getRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getRandomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getParents = (fatherId: number, motherId: number) => {
  const parentsNames = {
      female: parentsList.parentsFeDic,
      male: parentsList.parentsMaDic,
    },
    motherName = parentsNames.female[parentsList.mothers.indexOf(motherId)],
    fatherName = parentsNames.male[parentsList.fathers.indexOf(fatherId)];
  return { motherName, fatherName };
};

export const goRandom = (
  dispatch: Dispatch<AnyAction>,
  gender: "Male" | "Female",
  debugMode: boolean
) => {
  // Gender is out of random for now
  // const gender: ("Male" | "Female")[] = ["Male", "Female"];
  // const genderRandom = gender[getRandomInRange(0, 1)];
  const parents = getParents(getRandomInRange(0, 20), getRandomInRange(21, 41));
  const randomState: ICreateReducer = {
    clothing: {},
    parents: {
      gender,
      mother: parents.motherName,
      father: parents.fatherName,
      resValue: getRandomInRange(0, 100),
      skinValue: getRandomInRange(0, 100),
    },
    apparence: {
      // Причёска
      hair:
        gender == "Male"
          ? list.hairsMale[getRandomInRange(0, 22)]
          : list.hairsFemale[getRandomInRange(0, 22)],
      hairColor: list.hairColor[getRandomInRange(0, 64)],
      // Глаза
      eyes: getRandomFloat(-1, 1),
      eyesColor: list.eyeColor[getRandomInRange(0, 31)],
      // Брови
      brows: list.brows[getRandomInRange(0, 34)],
      browsHeight: getRandomFloat(-1, 1),
      browsWidth: getRandomFloat(-1, 1),
      browsColor: list.colorsList[getRandomInRange(0, 64)],
      browsTp: getRandomFloat(-1, 1),
      // Нос и переносица
      noseWidth: getRandomFloat(-1, 1),
      noseHeight: getRandomFloat(-1, 1),
      noseLength: getRandomFloat(-1, 1),
      noseBridge: getRandomFloat(-1, 1), // Кончик носа
      noseTip: getRandomFloat(-1, 1), // Тип переносицы
      noseBridgeShift: getRandomFloat(-1, 1), // Сдвиг переносицы
      // Черты лица
      cboneHeight: getRandomFloat(-1, 1), // Высота скул
      cboneWidth: getRandomFloat(-1, 1), // Ширина скул
      cheekWidth: getRandomFloat(-1, 1), // Ширина щёк
      jawWidth: getRandomFloat(-1, 1), // Ширина челюсти
      chinLength: getRandomFloat(-1, 1), // Длина подобродка
      chinWidth: getRandomFloat(-1, 1), // Ширина подбородка
      chinPos: getRandomFloat(-1, 1), // Положение подбородка
      chinShape: getRandomFloat(-1, 1), // Форма подбородка
      neckWidth: getRandomFloat(-1, 1), // Ширина шеи
      // Губы
      lips: getRandomFloat(-1, 1), // Тип губ
      lipsColor: list.colorsList[getRandomInRange(0, 64)],
      pomada: list.pomada[getRandomInRange(0, 10)],
      pomadaTp: getRandomFloat(-1, 1),
      // Борода
      beard: list.beards[getRandomInRange(0, 29)],
      beardColor: list.colorsList[getRandomInRange(0, 64)],
      beardTp: getRandomFloat(-1, 1),
      // Приметы
      faceColor: list.faceColor[getRandomInRange(0, 12)],
      faceColorTp: getRandomFloat(-1, 1),
      hairGrud: list.hairGrud[getRandomInRange(0, 17)],
      hairGrudColor: list.colorsList[getRandomInRange(0, 64)],
      hairGrudTp: getRandomFloat(-1, 1),
      older: list.older[getRandomInRange(0, 15)],
      olderTp: getRandomFloat(-1, 1),
      deffects: list.deffects[getRandomInRange(0, 24)],
      deffectsTp: getRandomFloat(-1, 1),
      // Особенности
      cosmetics: list.cosmetics[getRandomInRange(0, 16)],
      cosmeticsTp: getRandomFloat(-1, 1),
      rumyan: list.rumyan[getRandomInRange(0, 7)],
      rumyanColor: list.colorsList[getRandomInRange(0, 64)],
      rumyanTp: getRandomFloat(-1, 1),
      zagar: list.zagar[getRandomInRange(0, 11)],
      zagarTp: getRandomFloat(-1, 1),
      rodinki: list.vesnushki[getRandomInRange(0, 18)],
      rodinkiTp: getRandomFloat(-1, 1),
    },
  };
  setRandom(dispatch, randomState, debugMode);
};
