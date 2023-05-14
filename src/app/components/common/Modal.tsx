import React from "react";
import { IModalProps } from "@Types/components/common/modal";

export const Modal = ({ visible, setVisible, content }: IModalProps) => {
  window.onclick = (event: any) => {
    event.target.className == "modal" && setVisible(false);
  };

  return (
    <div className="modal" style={{ display: visible ? "block" : "none" }}>
      <div className="modal-content">{content}</div>
    </div>
  );
};
