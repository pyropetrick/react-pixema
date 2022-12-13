import Select from "react-select";
import { selectStyles } from "./styles";

export interface ISelectOption {
  value: string;
  label: string;
}

interface IProps {
  options: ISelectOption[];
  value: ISelectOption;
}

export const CustomSelect = ({ options, value }: IProps) => {
  return (
    <Select
      styles={selectStyles}
      options={options}
      value={value}
      isMulti={false}
      isSearchable={false}
    />
  );
};
