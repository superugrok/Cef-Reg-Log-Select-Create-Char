import React from "react";
import { createRoot } from "react-dom/client";
import { AppWrapper } from "@App/AppWrapper";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<AppWrapper />);
