import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "dark" | "light";

interface ITheme {
  theme: Theme;
}

const initialState: ITheme = {
  theme: "dark",
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    },
  },
});

export default theme.reducer;

export const { toggleTheme } = theme.actions;
