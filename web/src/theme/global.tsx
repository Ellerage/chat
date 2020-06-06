import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    color: white;
    background-color: #242442;
  }
`
