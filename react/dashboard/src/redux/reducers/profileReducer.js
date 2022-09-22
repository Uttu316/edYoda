import { PROFILE_ACTIONS_TYPES } from "../actions/actionsTypes";

const initiState = {
  token: null,
  userDetails: null,
};

const profileReducer = (state = initiState, action) => {
  switch (action.type) {
    case PROFILE_ACTIONS_TYPES.SET_TOKEN:
      return { ...state, token: action.payload };
      break;
    default:
      return state;
  }
};

export default profileReducer;
