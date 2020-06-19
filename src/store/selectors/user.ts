import { AppState } from "../../types";
import { UserObject } from "../../types/user";

export const selectAuthedUser = (state: AppState): any =>
  state.userReducer.user;
