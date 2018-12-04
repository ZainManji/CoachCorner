//@flow

import actionTypes from "../actionTypes";
import _ from "lodash";

const servicesReducer = (
  state: { data: Object } = { data: {} },
  action: Object,
) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case actionTypes.SET_SERVICES:
      action.services.forEach((service) => {
        newState.data[service._id] = service;
      });
      return newState;
    case actionTypes.UPDATE_SERVICE:
      newState.data[action.service._id] = action.service;
      return newState;
    case actionTypes.DELETE_SERVICE:
      delete newState.data[action.service._id];
      return newState;
    default:
      return state;
  }
};

export default servicesReducer;
