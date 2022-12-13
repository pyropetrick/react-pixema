import { StylesConfig } from "react-select";
import { Color } from "config";
import { ISelectOption } from "./CustomSelect";

export const selectStyles: StylesConfig<ISelectOption> = {
  control: (styles) => ({
    ...styles,
    fontSize: "16px",
    fontWeight: "500",
    border: "none",
    borderRadius: "10px",
    backgroundColor: Color.GRAPHITE,
  }),
  menu: (styles) => ({ ...styles, backgroundColor: Color.GRAPHITE, borderRadius: "10px" }),
  singleValue: (styles) => ({ ...styles, color: "#ffffff" }),
  container: (styles) => ({ ...styles, backgoundColor: Color.GRAPHITE }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
};
