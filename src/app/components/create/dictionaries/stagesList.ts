import imgApparence from "@Images/create/apparence.png";
import imgClothing from "@Images/create/clothing.png";
import imgParents from "@Images/create/origin.png";
import { IStages } from "@Types/components/create/stages";

export const stages: IStages[] = [
  {
    type: "parents",
    img: imgParents,
    title: "Parents",
  },
  {
    type: "apparence",
    img: imgApparence,
    title: "Apparence",
  },
  {
    type: "clothing",
    img: imgClothing,
    title: "Clothing",
  },
];
