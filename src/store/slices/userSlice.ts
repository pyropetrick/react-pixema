import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  email: string;
  isAuth: boolean;
}
interface IUserAPI {
  displayName: string | null;
  email: string | null;
}

const initialState: IUser = {
  name: "",
  email: "",
  isAuth: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload: { displayName, email } }: PayloadAction<IUserAPI>) => {
      if (displayName && email) {
        state.isAuth = true;
        state.name = displayName;
        state.email = email;
      }
    },
    removeUser: (state) => {
      state.isAuth = false;
      state.name = "";
    },
  },
});

export default user.reducer;

export const { setUser, removeUser } = user.actions;
