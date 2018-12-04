//@flow

import actionTypes from "../actionTypes";
import _ from "lodash";

const staffsReducer = (
  state: { data: Object } = { data: {} },
  action: Object,
) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case actionTypes.SET_STAFF:
      action.staff.forEach((staffMember) => {
        newState.data[staffMember._id] = staffMember;
      });
      return newState;
    case actionTypes.UPDATE_STAFF_MEMBER:
      newState.data[action.staffMember._id] = action.staffMember;
      return newState;
    case actionTypes.DELETE_STAFF_MEMBER:
      delete newState.data[action.staffMember._id];
      return newState;
    default:
      return state;
  }
};

export default staffsReducer;
