//@flow

import actionTypes from "../actionTypes";
import _ from "lodash";

const vehiclesReducer = (
  state: { data: Object } = { data: {} },
  action: Object,
) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case actionTypes.SET_VEHICLES:
      action.vehicles.forEach((vehicle) => {
        newState.data[vehicle._id] = vehicle;
      });
      return newState;
    case actionTypes.SET_YEARS:
      newState.years = action.years;
      newState.makes = [];
      newState.models = [];
      newState.engines = [];
      return newState;
    case actionTypes.SET_MAKES:
      newState.makes = action.makes;
      newState.models = [];
      newState.engines = [];
      return newState;
    case actionTypes.SET_MODELS:
      newState.models = action.models;
      newState.engines = [];
      return newState;
    case actionTypes.SET_ENGINES:
      newState.engines = action.engines;
      return newState;
    default:
      return state;
  }
};

export default vehiclesReducer;
