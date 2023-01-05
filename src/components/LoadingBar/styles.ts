import styled from "styled-components";

export const StyledLoadingBar = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid #e9218c;
  border-radius: 50%;
  border-left-color: transparent;
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-play-state: running;
  &:after {
    content: "";
    position: absolute;
    width: 130%;
    height: 131%;
    border: 5px solid #2490fd;
    border-radius: 50%;
    border-right-color: transparent;
    left: -13px;
    top: -12px;
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: running;
  }
  &:before {
    content: "";
    position: absolute;
    width: 160%;
    height: 160%;
    border: 5px solid #fcb100;
    border-radius: 50%;
    border-left-color: transparent;
    left: -20px;
    top: -20px;
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: running;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
