import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

const auth = createAsyncThunk("user/auth", async (userData) => {
  try {
  } catch (e) {}
});

const initialState: IUser = {
  name: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
