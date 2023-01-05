import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { ISignInData, ISignUpData } from "./types";
import { IMovieInfo } from "types";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const collectionUsers = (id: string) => doc(db, "users", id);

const collectionFavorites = (id: string) => collection(db, "users", id, "favorites");

export const userSignUp = async (userData: ISignUpData) => {
  const { email, password, name } = userData;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName: name });
  await setDoc(collectionUsers(user.uid), {
    name: user.displayName,
    email: user.email,
    id: user.uid,
  });
  return {
    name: user.displayName,
    email: user.email,
    id: user.uid,
  };
};

export const userSignIn = async (userData: ISignInData) => {
  const { email, password } = userData;
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return {
    name: user.displayName,
    email: user.email,
    id: user.uid,
  };
};

export const updateUserData = async (userData: ISignUpData) => {
  const { email, password, name } = userData;
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, { displayName: name });
    await updateEmail(auth.currentUser, email);
    await updatePassword(auth.currentUser, password);
    await updateDoc(collectionUsers(auth.currentUser.uid), { name, email });
  }
};

export const resetUserPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};

export const userLogOut = async () => {
  await signOut(auth);
};

export const addFavoriteToStore = async (movieInfo: IMovieInfo, userId: string) => {
  await addDoc(collectionFavorites(userId), {
    ...movieInfo,
  });
};

export const getFavoritesFromStore = async (userId: string) => {
  const { docs } = await getDocs(collectionFavorites(userId));
  const favorites = docs.map((doc) => doc.data());
  return favorites as IMovieInfo[];
};
