import React from "react";
import { ICreateSectionProps } from "@Types/components/create/create";
import { IStore } from "store/store";
import { useSelector } from "react-redux";
import { elements } from "../dictionaries/parentsList";
import { SwitchRange } from "../SwitchRange";
import { Switcher } from "../Switcher";

export const Parents = ({ stage }: ICreateSectionProps) => {
  const [parentsImg, setParentsImg] = React.useState({
    motherImg: null,
    fatherImg: null,
  });

  const fatherName = useSelector(
    (state: IStore) => state.create.parents.father
  );
  const motherName = useSelector(
    (state: IStore) => state.create.parents.mother
  );

  React.useEffect(() => {
    const getParentsImg = async () => {
      const fatherImg = await import(
        `@Images/create/parents/male/${fatherName}.png`
      );
      const motherImg = await import(
        `@Images/create/parents/female/${motherName}.png`
      );
      return { fatherImg, motherImg };
    };
    getParentsImg().then(({ fatherImg, motherImg }) =>
      setParentsImg({
        fatherImg: fatherImg.default,
        motherImg: motherImg.default,
      })
    );
  }, [fatherName, motherName]);

  return (
    <div
      className="create_parents_container"
      style={{ display: stage == "parents" ? "flex" : "none" }}
    >
      <span className="text_title">Parents</span>
      <div className="create_parents_image">
        <img src={parentsImg?.fatherImg} />
        <img src={parentsImg?.motherImg} />
      </div>
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
