import React from "react";
import { elements } from "../../dictionaries/parentsList";
import { SwitchRange } from "../../SwitchRange";
import { Switcher } from "../../Switcher";

export const Elements = ({ stage }) => {
  return (
    <div className="create_elements_wrapper">
      {elements.map((element, i) => (
        <div key={i}>
          {element.content.map((content, ic) => (
            <div key={ic}>
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
        </div>
      ))}
    </div>
  );
};
