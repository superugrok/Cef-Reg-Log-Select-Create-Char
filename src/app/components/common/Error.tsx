import React from "react";
import { IErrorProps } from "@Types/components/common/error";

export const Error = ({ errorText, setError }: IErrorProps) => {
  errorText && setTimeout(() => setError(null), 3000);
  return (
    <span style={{ opacity: errorText ? 1 : 0 }} className="error">
      {errorText}
    </span>
  );
};
