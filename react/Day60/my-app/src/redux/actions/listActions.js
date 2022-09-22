import { LIST_ACTIONS_TYPES } from "./actionsTypes";

export const onSetList = (value) => {
  return {
    type: LIST_ACTIONS_TYPES.SET_LIST,
    payload: value,
  };
};
