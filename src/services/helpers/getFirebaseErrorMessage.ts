export type FirebaseErrorCode =
  | "auth/email-already-in-use"
  | "auth/invalid-email"
  | "auth/wrong-password"
  | "auth/user-not-found";

export enum FirebaseError {
  EMAIL_ALREADY_IN_USE = "The email is already in use",
  WRONG_PASSWORD = "Email or password so wrong",
  NOT_FOUND = "User not found, please enter correct email",
  UNKNOWN_ERROR = "Error! Please reload the page",
}

export const getFirebaseErrorMessage = (errorCode: FirebaseErrorCode) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return FirebaseError.EMAIL_ALREADY_IN_USE;
    case "auth/wrong-password":
      return FirebaseError.WRONG_PASSWORD;
    case "auth/user-not-found":
      return FirebaseError.NOT_FOUND;
    default:
      return FirebaseError.UNKNOWN_ERROR;
  }
};
