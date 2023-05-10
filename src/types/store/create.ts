export interface ICreateReducer {
  apparence: {
    // Причёска
    hair: string;
    hairColor: string;
    // Глаза
    eyes: number;
    eyesColor: string;
    // Брови
    brows: string;
    browsHeight: number;
    browsWidth: number;
    browsColor: string;
    browsTp: number;
    // Нос и переносица
    noseWidth: number;
    noseHeight: number;
    noseLength: number;
    noseBridge: number; // Кончик носа
    noseTip: number; // Тип переносицы
    noseBridgeShift: number; // Сдвиг переносицы
    // Черты лица
    cboneHeight: number; // Высота скул
    cboneWidth: number; // Ширина скул
    cheekWidth: number; // Ширина щёк
    jawWidth: number; // Ширина челюсти
    chinLength: number; // Длина подобродка
    chinWidth: number; // Ширина подбородка
    chinPos: number; // Положение подбородка
    chinShape: number; // Форма подбородка
    neckWidth: number; // Ширина шеи
    // Губы
    lips: number; // Тип губ
    lipsColor: string;
    pomada: string;
    pomadaTp: number;
    // Борода
    beard: string;
    beardColor: string;
    beardTp: number;
    // Приметы
    faceColor: string;
    faceColorTp: number;
    hairGrud: string;
    hairGrudColor: string;
    hairGrudTp: number;
    older: string;
    olderTp: number;
    deffects: string;
    deffectsTp: number;
    // Особенности
    cosmetics: string;
    cosmeticsTp: number;
    rumyan: string;
    rumyanColor: string;
    rumyanTp: number;
    zagar: string;
    zagarTp: number;
    rodinki: string;
    rodinkiTp: number;
  };
}
