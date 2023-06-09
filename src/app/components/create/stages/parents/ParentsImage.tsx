import React from "react";
import { IStore } from "store/store";
import { useSelector } from "react-redux";

export const ParentsImage = () => {
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
    <div className="create_parents_images">
      <div className="create_parents_image">
        <img
          className="create_parents_image--father"
          src={parentsImg?.fatherImg}
        />
        <img
          className="create_parents_image--mother"
          src={parentsImg?.motherImg}
        />
      </div>
    </div>
  );
};
