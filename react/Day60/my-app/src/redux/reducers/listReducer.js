import { LIST_ACTIONS_TYPES } from "../actions/actionsTypes";
import { data as userList } from "../../constants";

const initiState = {
  usersList: userList,
};

const listReducer = (state = initiState, action) => {
  switch (action.type) {
    case LIST_ACTIONS_TYPES.SET_LIST: {
      return { ...state, usersList: action.payload };
      break;
    }

    default:
      return state;
  }
};

export default listReducer;
