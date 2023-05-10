import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Types/store/store";
import "@Styles/common/email.css";

export const Email = () => {
  const email = useSelector((state: IStore) => state.global.playerInfo.email);

  return (
    <div>
      <div className="email_block_wrapper">
        <p className="email_block_email">{email}</p>
      </div>
    </div>
  );
};
