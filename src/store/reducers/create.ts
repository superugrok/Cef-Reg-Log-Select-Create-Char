import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICreateReducer } from "@Types/store/create";
import { ICreateChangeValue } from "@Types/components/create/create";

const initialState: ICreateReducer = {
  parents: {
    gender: "Male",
    father: "Adrian",
    mother: "Amelia",
    skinValue: 50,
    resValue: 50,
  },
  apparence: {
    // Причёска
    hair: "Стандарт",
    hairColor: "1",
    // Глаза
    eyes: -1,
    eyesColor: "Зеленый",
    // Брови
    brows: "Стандарт",
    browsHeight: -1,
    browsWidth: -1,
    browsColor: "1",
    browsTp: -1,
    // Нос и переносица
    noseWidth: -1,
    noseHeight: -1,
    noseLength: -1,
    noseBridge: -1, // Кончик носа
    noseTip: -1, // Тип переносицы
    noseBridgeShift: -1, // Сдвиг переносицы
    // Черты лица
    cboneHeight: -1, // Высота скул
    cboneWidth: -1, // Ширина скул
    cheekWidth: -1, // Ширина щёк
    jawWidth: -1, // Ширина челюсти
    chinLength: -1, // Длина подобродка
    chinWidth: -1, // Ширина подбородка
    chinPos: -1, // Положение подбородка
    chinShape: -1, // Форма подбородка
    neckWidth: -1, // Ширина шеи
    // Губы
    lips: -1, // Тип губ
    lipsColor: "1",
    pomada: "Стандарт",
    pomadaTp: -1,
    // Борода
    beard: "Стандарт",
    beardColor: "1",
    beardTp: -1,
    // Приметы
    faceColor: "Стандарт",
    faceColorTp: -1,
    hairGrud: "Стандарт",
    hairGrudColor: "1",
    hairGrudTp: -1,
    older: "Стандарт",
    olderTp: -1,
    deffects: "Стандарт",
    deffectsTp: -1,
    // Особенности
    cosmetics: "Стандарт",
    cosmeticsTp: -1,
    rumyan: "Стандарт",
    rumyanColor: "1",
    rumyanTp: -1,
    zagar: "Стандарт",
    zagarTp: -1,
    rodinki: "Стандарт",
    rodinkiTp: -1,
  },
  clothing: {},
};

export const createReducer = createSlice({
  name: "CREATE",
  initialState,
  reducers: {
    SET_RANDOM(state, action: PayloadAction<ICreateReducer>) {
      // state = action.payload - Spread cannot be used because of redux no-support.
      state.apparence = action.payload.apparence;
      state.clothing = action.payload.clothing;
      state.parents = action.payload.parents;
    },
    SET_DEFAULT_STATE(state) {
      // state = initialState cannot be used because of redux no-support.
      state.apparence = initialState.apparence;
      state.clothing = initialState.clothing;
      state.parents = initialState.parents;
    },
    CHANGE_VALUE(state, action: PayloadAction<ICreateChangeValue>) {
      state[action.payload.stage][action.payload.type] = action.payload.value;
    },
  },
});
