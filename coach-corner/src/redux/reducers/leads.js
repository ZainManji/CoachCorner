//@flow

import actionTypes from "../actionTypes";
import _ from "lodash";

const leadsReducer = (
  state: { data: Object } = { data: {} },
  action: Object,
) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case actionTypes.SET_LEADS:
      action.leads.forEach((lead) => {
        newState.data[lead._id] = lead;
      });
      return newState;
    case actionTypes.UPDATE_LEAD:
      newState.data[action.lead._id] = action.lead;
      return newState;
    case actionTypes.DELETE_LEAD:
      delete newState.data[action.lead._id];
      return newState;
    default:
      return state;
  }
};

export default leadsReducer;
