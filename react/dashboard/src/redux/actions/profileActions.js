import { PROFILE_ACTIONS_TYPES } from "./actionsTypes";

export const setToken = (token) => {
  return {
    type: PROFILE_ACTIONS_TYPES.SET_TOKEN,
    payload: token,
  };
};
