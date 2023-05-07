import React from "react";
import { IError } from "@Types/components/common/error";

export const Error = ({ errorText, setError }: IError) => {
  errorText && setTimeout(() => setError(null), 3000);
  return (
    <span style={{ opacity: errorText ? 1 : 0 }} className="error">
      {errorText}
    </span>
  );
};
