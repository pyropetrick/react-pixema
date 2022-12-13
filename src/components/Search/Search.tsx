import { StyledSearch } from "./styles";
import { ChangeEvent } from "react";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Search = ({ onChange, value }: IProps) => {
  return (
    <StyledSearch
      onChange={onChange}
      value={value}
      name="search"
      type="search"
      placeholder="Search"
    />
  );
};
