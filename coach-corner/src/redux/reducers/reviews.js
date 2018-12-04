//@flow

import actionTypes from "../actionTypes";
import _ from "lodash";

const reviewsReducer = (
  state: { data: Object } = { data: {} },
  action: Object,
) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case actionTypes.SET_REVIEWS:
      action.reviews.forEach((review) => {
        newState.data[review._id] = review;
      });
      return newState;
    case actionTypes.SET_REVIEW:
      newState.review = action.review;
      return newState;
    case actionTypes.UPDATE_REVIEW:
      newState.data[action.review._id] = action.review;
      return newState;
    case actionTypes.DELETE_REVIEW:
      delete newState.data[action.review._id];
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
