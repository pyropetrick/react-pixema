import { css } from "styled-components";
import { Media } from ".";

const h1 = css`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
  }
  ${Media.SM} {
    font-size: 28px;
    line-height: 42px;
  }
`;
const h2 = css`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  ${Media.SM} {
    font-size: 20px;
  }
`;
const h3 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;
const s1 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;
const s2 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
const s3 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
const b = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const typography = { h1, h2, h3, s1, s2, s3, b };
