import React from "react";
import { Switcher } from "../Switcher";
import { SwitchRange } from "../SwitchRange";
import { IElements } from "@Types/components/create/elements";

export const elements: IElements[] = [
  {
    category: "Hairstyle",
    content: [
      {
        title: "Hairstyle",
        element: <Switcher type="hair" />,
      },
      {
        title: "Hair color",
        element: <Switcher type="hairColor" />,
      },
    ],
  },
  {
    category: "Eyes",
    content: [
      {
        title: "Eyes type",
        element: <SwitchRange range={true} type="eyes" />,
      },
      {
        title: "Eyes color",
        element: <Switcher type="eyesColor" />,
      },
    ],
  },
  {
    category: "Brows",
    content: [
      {
        title: "Brows type",
        element: <Switcher type="brows" />,
      },
      {
        title: "Brows color",
        element: <Switcher type="browsColor" />,
      },
      {
        title: "Brows height",
        element: <SwitchRange range={true} type="browsHeight" />,
      },
      {
        title: "Brows width",
        element: <SwitchRange range={true} type="browsWidth" />,
      },
      {
        title: "Eyebrow transparency",
        element: <SwitchRange range={true} type="browsTp" />,
      },
    ],
  },
  {
    category: "Nose and nose bridge",
    content: [
      {
        title: "Nose width",
        element: <SwitchRange range={true} type="noseWidth" />,
      },
      {
        title: "Nose height",
        element: <SwitchRange range={true} type="noseHeight" />,
      },
      {
        title: "Nose length",
        element: <SwitchRange range={true} type="noseLength" />,
      },
      {
        title: "Nose tip",
        element: <SwitchRange range={true} type="noseTip" />,
      },
      {
        title: "Nose bridge",
        element: <SwitchRange range={true} type="noseBridge" />,
      },
      {
        title: "Nose bridge shift",
        element: <SwitchRange range={true} type="noseBridgeShift" />,
      },
    ],
  },
  {
    category: "Facial features",
    content: [
      {
        title: "Cbone height",
        element: <SwitchRange range={true} type="cboneHeight" />,
      },
      {
        title: "Cbone width",
        element: <SwitchRange range={true} type="cboneWidth" />,
      },
      {
        title: "Cheek width",
        element: <SwitchRange range={true} type="cheekWidth" />,
      },
      {
        title: "Jaw width",
        element: <SwitchRange range={true} type="jawWidth" />,
      },
      {
        title: "Chin length",
        element: <SwitchRange range={true} type="chinLength" />,
      },
      {
        title: "Chin width",
        element: <SwitchRange range={true} type="chinWidth" />,
      },
      {
        title: "Chin position",
        element: <SwitchRange range={true} type="chinPos" />,
      },
      {
        title: "Chin shape",
        element: <SwitchRange range={true} type="chinShape" />,
      },
      {
        title: "Neck width",
        element: <SwitchRange range={true} type="neckWidth" />,
      },
    ],
  },
  {
    category: "Lips",
    content: [
      {
        title: "Lips type",
        element: <SwitchRange range={true} type="lips" />,
      },
      {
        title: "Lipstick",
        element: <Switcher type="pomada" />,
      },
      {
        title: "Lips color",
        element: <Switcher type="lipsColor" />,
      },
      {
        title: "Lipstick transparency",
        element: <SwitchRange range={true} type="pomadaTp" />,
      },
    ],
  },
  {
    category: "Beard",
    content: [
      {
        title: "Hairstyle",
        element: <Switcher type="beard" />,
      },
      {
        title: "Beard color",
        element: <Switcher type="beardColor" />,
      },
      {
        title: "Beard transparency",
        element: <SwitchRange range={true} type="beardTp" />,
      },
    ],
  },
  {
    category: "Appearance signs",
    content: [
      {
        title: "Face color",
        element: <Switcher type="faceColor" />,
      },
      {
        title: "Face color transparency",
        element: <SwitchRange range={true} type="faceColorTp" />,
      },
      {
        title: "Chest hairs type",
        element: <Switcher type="hairGrud" />,
      },
      {
        title: "Chest hairs color",
        element: <SwitchRange range={true} type="hairGrudColor" />,
      },
      {
        title: "Older",
        element: <Switcher type="older" />,
      },
      {
        title: "Older effects",
        element: <SwitchRange range={true} type="olderTp" />,
      },
      {
        title: "Scars",
        element: <Switcher type="deffects" />,
      },
      {
        title: "Scars effects",
        element: <SwitchRange range={true} type="deffectsTp" />,
      },
    ],
  },
  {
    category: "Peculiarities",
    content: [
      {
        title: "Cosmetics",
        element: <Switcher type="cosmetics" />,
      },
      {
        title: "Cosmetics transparency",
        element: <SwitchRange range={true} type="cosmeticsTp" />,
      },
      {
        title: "Blush",
        element: <Switcher type="rumyan" />,
      },
      {
        title: "Blush color",
        element: <Switcher type="rumyanColor" />,
      },
      {
        title: "Blush effects",
        element: <SwitchRange range={true} type="rumyanTp" />,
      },
      {
        title: "A tan",
        element: <Switcher type="zagar" />,
      },
      {
        title: "A tan transparency",
        element: <SwitchRange range={true} type="zagarTp" />,
      },
      {
        title: "Freckles and moles",
        element: <Switcher type="rodinki" />,
      },
      {
        title: "Freckles and moles transparency",
        element: <SwitchRange range={true} type="rodinkiTp" />,
      },
    ],
  },
];
