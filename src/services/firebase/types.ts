export interface IUserModel {
  name: string | null;
  email: string | null;
  id: string | null;
}

export interface ISignUpData {
  email: string;
  password: string;
  name: string;
}

export interface ISignInData {
  email: string;
  password: string;
}
