import { UserActionTypes, UserState } from "../../types/user";

import { ADD_AUTHED_USER, REMOVE_AUTHED_USER } from "../../store/types";

const initialState: UserState = {
  user: {},
  users: [],
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case ADD_AUTHED_USER:
      return {
        ...state,
        user: action.user,
      };
    case REMOVE_AUTHED_USER:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};
