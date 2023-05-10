import React from "react";
import { ICreateSectionProps } from "@Types/components/create/create";

export const Clothing = ({ stage }: ICreateSectionProps) => {
  return (
    <div style={{ display: stage == "clothing" ? "initial" : "none" }}>
      Clothing
    </div>
  );
};
