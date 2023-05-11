import { IElements } from "@Types/components/create/elements";

export const elements: IElements[] = [
  {
    category: "Hairstyle",
    content: [
      {
        title: "Hairstyle",
        elementType: "Switcher",
        type: "hair",
      },
      {
        title: "Hair color",
        elementType: "Switcher",
        type: "hairColor",
      },
    ],
  },
  {
    category: "Eyes",
    content: [
      {
        title: "Eyes type",
        type: "eyes",
        elementType: "SwitchRange",
      },
      {
        title: "Eyes color",
        elementType: "Switcher",
        type: "eyesColor",
      },
    ],
  },
  {
    category: "Brows",
    content: [
      {
        title: "Brows type",
        elementType: "Switcher",
        type: "brows",
      },
      {
        title: "Brows color",
        elementType: "Switcher",
        type: "browsColor",
      },
      {
        title: "Brows height",
        elementType: "SwitchRange",
        type: "browsHeight",
      },
      {
        title: "Brows width",
        elementType: "SwitchRange",
        type: "browsWidth",
      },
      {
        title: "Eyebrow transparency",
        elementType: "SwitchRange",
        type: "browsTp",
      },
    ],
  },
  {
    category: "Nose and nose bridge",
    content: [
      {
        title: "Nose width",
        elementType: "SwitchRange",
        type: "noseWidth",
      },
      {
        title: "Nose height",
        elementType: "SwitchRange",
        type: "noseHeight",
      },
      {
        title: "Nose length",
        elementType: "SwitchRange",
        type: "noseLength",
      },
      {
        title: "Nose tip",
        elementType: "SwitchRange",
        type: "noseTip",
      },
      {
        title: "Nose bridge",
        elementType: "SwitchRange",
        type: "noseBridge",
      },
      {
        title: "Nose bridge shift",
        elementType: "SwitchRange",
        type: "noseBridgeShift",
      },
    ],
  },
  {
    category: "Facial features",
    content: [
      {
        title: "Cbone height",
        elementType: "SwitchRange",
        type: "cboneHeight",
      },
      {
        title: "Cbone width",
        elementType: "SwitchRange",
        type: "cboneWidth",
      },
      {
        title: "Cheek width",
        elementType: "SwitchRange",
        type: "cheekWidth",
      },
      {
        title: "Jaw width",
        elementType: "SwitchRange",
        type: "jawWidth",
      },
      {
        title: "Chin length",
        elementType: "SwitchRange",
        type: "chinLength",
      },
      {
        title: "Chin width",
        elementType: "SwitchRange",
        type: "chinWidth",
      },
      {
        title: "Chin position",
        elementType: "SwitchRange",
        type: "chinPos",
      },
      {
        title: "Chin shape",
        elementType: "SwitchRange",
        type: "chinShape",
      },
      {
        title: "Neck width",
        elementType: "SwitchRange",
        type: "neckWidth",
      },
    ],
  },
  {
    category: "Lips",
    content: [
      {
        title: "Lips type",
        elementType: "SwitchRange",
        type: "lips",
      },
      {
        title: "Lipstick",
        elementType: "Switcher",
        type: "pomada",
      },
      {
        title: "Lips color",
        elementType: "Switcher",
        type: "lipsColor",
      },
      {
        title: "Lipstick transparency",
        elementType: "SwitchRange",
        type: "pomadaTp",
      },
    ],
  },
  {
    category: "Beard",
    content: [
      {
        title: "Hairstyle",
        elementType: "Switcher",
        type: "beard",
      },
      {
        title: "Beard color",
        elementType: "Switcher",
        type: "beardColor",
      },
      {
        title: "Beard transparency",
        elementType: "SwitchRange",
        type: "beardTp",
      },
    ],
  },
  {
    category: "Appearance signs",
    content: [
      {
        title: "Face color",
        elementType: "Switcher",
        type: "faceColor",
      },
      {
        title: "Face color transparency",
        elementType: "SwitchRange",
        type: "faceColorTp",
      },
      {
        title: "Chest hairs type",
        elementType: "Switcher",
        type: "hairGrud",
      },
      {
        title: "Chest hairs color",
        elementType: "SwitchRange",
        type: "hairGrudColor",
      },
      {
        title: "Older",
        elementType: "Switcher",
        type: "older",
      },
      {
        title: "Older effects",
        elementType: "SwitchRange",
        type: "olderTp",
      },
      {
        title: "Scars",
        elementType: "Switcher",
        type: "deffects",
      },
      {
        title: "Scars effects",
        elementType: "SwitchRange",
        type: "deffectsTp",
      },
    ],
  },
  {
    category: "Peculiarities",
    content: [
      {
        title: "Cosmetics",
        elementType: "Switcher",
        type: "cosmetics",
      },
      {
        title: "Cosmetics transparency",
        elementType: "SwitchRange",
        type: "cosmeticsTp",
      },
      {
        title: "Blush",
        elementType: "Switcher",
        type: "rumyan",
      },
      {
        title: "Blush color",
        elementType: "Switcher",
        type: "rumyanColor",
      },
      {
        title: "Blush effects",
        elementType: "SwitchRange",
        type: "rumyanTp",
      },
      {
        title: "A tan",
        elementType: "Switcher",
        type: "zagar",
      },
      {
        title: "A tan transparency",
        elementType: "SwitchRange",
        type: "zagarTp",
      },
      {
        title: "Freckles and moles",
        elementType: "Switcher",
        type: "rodinki",
      },
      {
        title: "Freckles and moles transparency",
        elementType: "SwitchRange",
        type: "rodinkiTp",
      },
    ],
  },
];
