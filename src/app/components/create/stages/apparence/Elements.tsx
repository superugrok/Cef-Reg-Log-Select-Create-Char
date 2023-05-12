import React from "react";
import { elements } from "../../dictionaries/apparenceList";
import { SwitchRange } from "../../SwitchRange";
import { Switcher } from "../../Switcher";
import { checkOpen } from "@Utils/create/closeAllDetails";

export const Elements = ({ stage }) => {
  return (
    <div className="create_apparence_section">
      {elements.map((element, i) => (
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
      ))}
    </div>
  );
};
