import React from "react";
import { Switcher } from "../Switcher";
import { SwitchRange } from "../SwitchRange";
import { IElements } from "@Types/components/create/elements";

export const elements: IElements[] = [
  {
    category: "Parents",
    content: [
      {
        title: "Gender",
        element: <Switcher type="gender" />,
      },
      {
        title: "Mother",
        element: <Switcher type="mother" />,
      },
      {
        title: "Father",
        element: <Switcher type="father" />,
      },
    ],
  },
  {
    category: "Skin",
    content: [
      {
        title: "Skin tone",
        element: <SwitchRange range={false} type="skinValue" />,
      },
    ],
  },
  {
    category: "Similarity",
    content: [
      {
        title: "Similarity",
        element: <SwitchRange range={false} type="resValue" />,
      },
    ],
  },
];
