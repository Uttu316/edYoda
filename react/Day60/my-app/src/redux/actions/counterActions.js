import { COUNTER_ACTIONS_TYPES } from "./actionsTypes";

export const onAdd = (value) => {
  return {
    type: COUNTER_ACTIONS_TYPES.INCREMENT,
    payload: value,
  };
};

export const onMinus = (value) => {
  return {
    type: COUNTER_ACTIONS_TYPES.DECREMENT,
    payload: value,
  };
};

export const changeColor = (color) => {
  return {
    type: COUNTER_ACTIONS_TYPES.CHANGE_COLOR,
    newColor: color,
  };
};
