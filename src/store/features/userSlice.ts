import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
  signOut,
} from "firebase/auth";
import { FirebaseError, FirebaseErrorCode, getFirebaseErrorMessage } from "services";
import { ISignInData, ISignUpData } from "types";

interface IUser {
  name: string | null | undefined;
  email: string | null | undefined;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}

export const signUp = createAsyncThunk<
  User | undefined | null,
  ISignUpData,
  { rejectValue: FirebaseError }
>("user/signUp", async ({ email, password, name }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    auth.currentUser &&
      (await updateProfile(auth.currentUser, {
        displayName: name,
      }));
    return auth.currentUser;
  } catch (error) {
    const firebaseError = error as { errorCode: FirebaseErrorCode };
    rejectWithValue(getFirebaseErrorMessage(firebaseError.errorCode));
  }
});

export const signIn = createAsyncThunk<
  UserCredential | undefined,
  ISignInData,
  { rejectValue: FirebaseError }
>("user/signIn", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const firebaseError = error as { errorCode: FirebaseErrorCode };
    rejectWithValue(getFirebaseErrorMessage(firebaseError.errorCode));
  }
});

export const userSignOut = createAsyncThunk<any, any, { rejectValue: FirebaseError }>(
  "user/signOut",
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      return await signOut(auth);
    } catch (error) {
      const firebaseError = error as { errorCode: FirebaseErrorCode };
      rejectWithValue(getFirebaseErrorMessage(firebaseError.errorCode));
    }
  },
);

const initialState: IUser = {
  name: "",
  email: "",
  isAuth: false,
  isLoading: false,
  error: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.email = payload.email as string;
        state.name = payload.displayName as string;
        state.isAuth = true;
      }
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.email = payload.user.email;
        state.name = payload.user.displayName;
        state.isAuth = true;
      }
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });
    builder.addCase(userSignOut.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userSignOut.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.email = "";
      state.name = "";
    });
    builder.addCase(userSignOut.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default user.reducer;
