//@flow

import actionTypes from "../actionTypes";
import _ from "lodash";

const usersReducer = (
  state: { data: Object } = { data: {} },
  action: Object,
) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case actionTypes.SET_USERS:
      action.users.forEach((user) => {
        newState.data[user._id] = user;
      });
      return newState;
    case actionTypes.UPDATE_USER:
      newState.data[action.user._id] = action.user;
      return newState;
    case actionTypes.DELETE_USER:
      delete newState.data[action.user._id];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
