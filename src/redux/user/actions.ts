import { UserActionTypes } from "./actionTypes";

export const loginUser = (payload: { email: string; password: string }) => ({
  type: UserActionTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
