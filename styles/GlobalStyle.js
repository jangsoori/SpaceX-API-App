import { Global, css } from "@emotion/react";

import React from "react";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        html {
          font-family: "Rajdhani";
        }
      `}
    />
  );
}
