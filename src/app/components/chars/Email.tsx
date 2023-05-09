import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";

export const Email = () => {
  const email = useSelector((state: IStore) => state.global.playerInfo.email);

  return <div>{email}</div>;
};
