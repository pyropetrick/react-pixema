import { Color } from "config";
import styled from "styled-components";
import { Media, typography } from "ui";

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  padding-top: 40px;
  height: 100vh;
  ${Media.MD} {
    padding: 40px;
    height: 100%;
    align-items: center;
  }
  ${Media.SM} {
    padding: 32px 24px 48px;
  }
`;

export const Body = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  ${Media.MD} {
    text-align: center;
    margin-top: 100px;
  }
  ${Media.SM} {
    margin-top: 50px;
  }
`;
export const Text = styled.p`
  ${typography.b};
  color: ${Color.LIGHT};
  margin: 20px 0;
`;

export const GIF = styled.img`
  margin-top: 30px;
  width: 700px;
  height: 400px;
`;
