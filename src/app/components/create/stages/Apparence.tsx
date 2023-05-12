import React from "react";
import { ICreateSectionProps } from "@Types/components/create/create";
import { Elements } from "./apparence/Elements";

export const Apparence = ({ stage }: ICreateSectionProps) => {
  return (
    <div style={{ display: stage == "apparence" ? "initial" : "none" }}>
      <Elements stage={stage} />
    </div>
  );
};
