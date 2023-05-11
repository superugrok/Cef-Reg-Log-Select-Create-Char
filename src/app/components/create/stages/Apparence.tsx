import React from "react";
import { ICreateSectionProps } from "@Types/components/create/create";
import { Switcher } from "../Switcher";
import { SwitchRange } from "../SwitchRange";
import { elements } from "../dictionaries/apparenceList";
import { checkOpen } from "@Utils/create/closeAllDetails";

export const Apparence = ({ stage }: ICreateSectionProps) => {
  const buildElements = () =>
    elements.map((element, i) => (
      <details onClick={() => checkOpen(".create_apparence_section")} key={i}>
        <summary className="details_hover">
          {element.category}
          <div className="details_igul"></div>
          <div className="details_status"></div>
        </summary>
        {element.content.map((content, i) => (
          <div key={i}>
            <span className="text_title">{content.title}</span>
            {content.elementType == "Switcher" ? (
              <Switcher type={content.type} stage={stage} />
            ) : (
              <SwitchRange
                stage={stage}
                type={content.type}
                range={content.range}
              />
            )}
          </div>
        ))}
      </details>
    ));

  return (
    <div
      className="create_apparence_section"
      style={{ display: stage == "apparence" ? "initial" : "none" }}
    >
      {buildElements()}
    </div>
  );
};
