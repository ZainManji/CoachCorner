//@flow

import actionTypes from "../actionTypes";
import _ from "lodash";

const bookingsReducer = (
  state: { data: Object } = { data: {} },
  action: Object,
) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case actionTypes.SET_BOOKINGS:
      newState.data = {};
      action.bookings.forEach((booking) => {
        newState.data[booking._id] = booking;
      });
      return newState;
    case actionTypes.SET_BOOKING:
      newState.booking = action.booking;
      return newState;
    case actionTypes.UPDATE_BOOKING:
      newState.data[action.booking._id] = action.booking;
      return newState;
    case actionTypes.DELETE_BOOKING:
      delete newState.data[action.booking._id];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
