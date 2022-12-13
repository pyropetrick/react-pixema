import styled from "styled-components";
import { Media } from "ui";

export const StyledLoadingBar = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  width: 100px;
  height: 15px;
  background: linear-gradient(to bottom right, cyan, lightblue);
  border-radius: 6px;
  box-shadow: 0 0 10px lightblue;
  animation: load 1s infinite alternate ease-in-out;
  @keyframes load {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(390px, 0);
    }
  }
  ${Media.MD} {
    @keyframes load {
      to {
        transform: translate(200px, 0);
      }
    }
  }
  ${Media.MD} {
    width: 50px;
    @keyframes load {
      to {
        transform: translate(100px, 0);
      }
    }
  }
`;
