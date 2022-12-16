import { ChangeEvent } from "react";
import { Input } from "ui";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Search = ({ onChange, value }: IProps) => {
  return (
    <Input onChange={onChange} value={value} name="search" type="search" placeholder="Search" />
  );
};
