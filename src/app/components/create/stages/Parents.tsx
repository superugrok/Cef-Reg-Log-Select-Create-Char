import React from "react";
import { ICreateSectionProps } from "@Types/components/create/create";

export const Parents = ({ stage }: ICreateSectionProps) => {
  return (
    <div style={{ display: stage == "parents" ? "initial" : "none" }}>
      Parents
    </div>
  );
};
