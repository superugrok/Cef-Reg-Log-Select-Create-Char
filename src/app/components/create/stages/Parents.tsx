import React from "react";
import { ICreateSectionProps } from "@Types/components/create/create";
import { ParentsImage } from "./parents/ParentsImage";
import { Elements } from "./parents/Elements";

export const Parents = ({ stage }: ICreateSectionProps) => {
  return (
    <div
      className="create_parents_container"
      style={{ display: stage == "parents" ? "flex" : "none" }}
    >
      <span className="text_title">Parents</span>
      <ParentsImage />
      <Elements stage={stage} />
    </div>
  );
};
