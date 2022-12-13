import styled, { createGlobalStyle } from "styled-components";
import { Media, resetCSS, themeDark, themeLight } from ".";
import { Color } from "../config";

export const GlobalStyles = createGlobalStyle`
${resetCSS};
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&display=swap');
body {
  color: ${Color.PRIMARY_TEXT};
  background-color: ${Color.PRIMARY_BG};
}
html {
  font-family: 'Exo 2', sans-serif;
  font-style: normal;
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

export const AppWrapper = styled.div`
  /* height: 100vh; */
  padding: 60px;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 146px;
  ${Media.MD} {
    padding: 40px;
    height: 100%;
    grid-template-columns: 1fr;
  }
  ${Media.SM} {
    padding: 32px 24px 48px;
  }
`;
export const MainView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
