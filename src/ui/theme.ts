import { css } from "styled-components";
import { Color } from "../config";

export const themeLight = css`
  --primary-text: ${Color.DARK};
  --primary-bg: ${Color.WHITE};
  --secondary-bg: ${Color.WHITE};
  --block-bg: ${Color.WHITE};
  --select-bg: ${Color.LIGHT};
  --logo-color: ${Color.BLACK};
`;
export const themeDark = css`
  --primary-text: ${Color.WHITE};
  --primary-bg: ${Color.BLACK};
  --secondary-bg: ${Color.GRAPHITE};
  --block-bg: ${Color.DARK};
  --select-bg: ${Color.GRAPHITE};
  --logo-color: ${Color.WHITE}
`;
