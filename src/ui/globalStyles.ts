import { createGlobalStyle } from "styled-components";
import { resetCSS, themeDark, themeLight } from ".";
import { Color } from "../config";

export const GlobalStyles = createGlobalStyle`
${resetCSS};
body {
  color: ${Color.PRIMARY_TEXT};
  background-color: ${Color.PRIMARY_BG};
  /* height: 100%; */
}
html {
  font-family: 'Exo 2', sans-serif;
  font-style: normal;
  height:100%;
}
html[theme=dark] {
  ${themeDark}
}
html[theme=light] {
  ${themeLight}
}
body {
  &::-webkit-scrollbar {
    display: none;
  }
}
`;
