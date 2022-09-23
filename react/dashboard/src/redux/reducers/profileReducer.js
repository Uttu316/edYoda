import { PROFILE_ACTIONS_TYPES } from "../actions/actionsTypes";

const initiState = {
  token: localStorage.getItem("token") || null,
  userDetails: null,
  likeCount: 0,
};

const profileReducer = (state = initiState, action) => {
  switch (action.type) {
    case PROFILE_ACTIONS_TYPES.SET_TOKEN:
      return { ...state, token: action.payload };
      break;
    case PROFILE_ACTIONS_TYPES.SET_LIKE_COUNT:
      return { ...state, likeCount: action.payload };
      break;
    default:
      return state;
  }
};

export default profileReducer;
