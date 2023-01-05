import Select, { SingleValue } from "react-select";
import { selectStyles } from "./styles";

export enum MovieType {
  MOVIES = "movie",
  SERIES = "series",
  EPISODE = "episode",
}

export interface ISelectOption {
  value: MovieType;
  label: string;
}

interface IProps {
  options: ISelectOption[];
  value: ISelectOption | undefined;
  defaultValue: ISelectOption;
  onChange: (option: SingleValue<ISelectOption> | unknown) => void;
}

export const MovieTypeSelect = ({ options, value, defaultValue, onChange }: IProps) => {
  return (
    <Select
      defaultValue={defaultValue}
      styles={selectStyles}
      options={options}
      value={value}
      isMulti={false}
      isSearchable={false}
      onChange={onChange}
    />
  );
};
