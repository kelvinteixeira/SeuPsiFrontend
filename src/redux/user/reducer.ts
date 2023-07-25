import { UserActionTypes } from "./actionTypes";

const initialState = {
  currentUser: null,
};

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
}
