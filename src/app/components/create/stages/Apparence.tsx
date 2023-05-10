import React from "react";
import { ICreateSectionProps } from "@Types/components/create/create";

export const Apparence = ({ stage }: ICreateSectionProps) => {
  return (
    <div style={{ display: stage == "apparence" ? "initial" : "none" }}>
      Apparence
    </div>
  );
};
