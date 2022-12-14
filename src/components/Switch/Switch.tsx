import { ChangeEvent } from "react";
import { Label, StyledSwitch, Switcher } from "./styles";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export const Switch = ({ onChange, checked }: IProps) => {
  return (
    <StyledSwitch>
      <Switcher>
        <input id="switch" type="checkbox" onChange={onChange} checked={checked} />
        <Label htmlFor="switch" />
      </Switcher>
    </StyledSwitch>
  );
};
