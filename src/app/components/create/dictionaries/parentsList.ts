import { IElements } from "@Types/components/create/elements";

export const elements: IElements[] = [
  {
    category: "Parents",
    content: [
      {
        title: "Gender",
        elementType: "Switcher",
        type: "gender",
      },
      {
        title: "Mother",
        elementType: "Switcher",
        type: "mother",
      },
      {
        title: "Father",
        elementType: "Switcher",
        type: "father",
      },
    ],
  },
  {
    category: "Skin",
    content: [
      {
        title: "Skin tone",
        range: true,
        elementType: "SwitchRange",
        type: "skinValue",
      },
    ],
  },
  {
    category: "Similarity",
    content: [
      {
        title: "Similarity",
        range: true,
        elementType: "SwitchRange",
        type: "resValue",
      },
    ],
  },
];
