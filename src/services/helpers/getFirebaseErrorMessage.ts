import { FirebaseError } from "firebase/app";

export enum FirebaseErrorMessage {
  EMAIL_ALREADY_IN_USE = "The email is already in use",
  WRONG_PASSWORD = "Email or password so wrong",
  NOT_FOUND = "User not found, please enter correct email",
  UNKNOWN_ERROR = "Error! Please reload the page",
}

export const getFirebaseErrorMessage = (error: FirebaseError) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return FirebaseErrorMessage.EMAIL_ALREADY_IN_USE;
    case "auth/wrong-password":
      return FirebaseErrorMessage.WRONG_PASSWORD;
    case "auth/user-not-found":
      return FirebaseErrorMessage.NOT_FOUND;
    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
