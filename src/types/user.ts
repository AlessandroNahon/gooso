import { ADD_AUTHED_USER, REMOVE_AUTHED_USER } from "../store/types";

export interface UserDataObject {
  createdAt: Date;
  email: string;
  id: number;
  name: string;
  updatedAt: Date;
}

export interface UserObject {
  token: string;
  data: UserDataObject;
}

export type UserObjectTypes = UserObject | undefined | null;

export interface AuthCreds {
  email: string;
  password: string;
}

export type AuthCredsType = AuthCreds | undefined | null | {};

// Reducer Types
export interface UserState {
  user: UserObject | undefined | {} | null;
  users: Array<UserObject>;
}

interface AuthedUserAction {
  type: typeof ADD_AUTHED_USER;
  user: UserObject;
}
interface RemoveUserAction {
  type: typeof REMOVE_AUTHED_USER;
}

export type UserActionTypes = AuthedUserAction | RemoveUserAction;
