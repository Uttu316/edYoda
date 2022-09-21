import { COUNTER_ACTIONS_TYPES } from "../actions/actionsTypes";

const initiState = {
  value: 0,
  color: "salmon",
};

const counterReducer = (state = initiState, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS_TYPES.INCREMENT:
      return { ...state, value: action.payload };
      break;
    case COUNTER_ACTIONS_TYPES.DECREMENT:
      return { ...state, value: action.payload };
      break;
    case COUNTER_ACTIONS_TYPES.CHANGE_COLOR:
      return { ...state, color: action.newColor };
      break;

    default:
      return state;
  }
};

export default counterReducer;
