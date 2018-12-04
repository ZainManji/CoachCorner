// @flow
import actionTypes from "../actionTypes";
import { dispatch } from "../configureStore";
import makeRequest from "./makeRequest";


export function fetchReviews() {
  makeRequest({
    url: `/api/reviews`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_REVIEWS,
        reviews: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_REVIEWS_FAILURE,
        error: err,
      });
    });
}

export function fetchReviewByBookingID(bookingID) {
  makeRequest({
    url: `/api/reviews/bookingID/${bookingID}`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_REVIEW,
        review: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_REVIEW_FAILURE,
        error: err,
      });
    });
}

export function addReview(review) {
  // Make a request to add the review to DB, and on response success, dispatch
  makeRequest({
    url: `/api/reviews/add`,
    method: "POST",
    data: review
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_REVIEW,
        review: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_REVIEW_FAILURE,
        error: err,
      });
    });
}

export function updateReview(review) {
  // Make a request to update the review to DB, and on response success, dispatch
  makeRequest({
    url: `/api/reviews/update`,
    method: "POST",
    data: review
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_REVIEW,
        review: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_REVIEW_FAILURE,
        error: err,
      });
    });
}

export function deleteReview(review) {
  // Make a request to delete the review from DB, and on response success, dispatch
  makeRequest({
    url: `/api/reviews/delete`,
    method: "POST",
    data: review
  })
    .then(response => {
      dispatch({
        type: actionTypes.DELETE_REVIEW,
        review: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.DELETE_REVIEW_FAILURE,
        error: err,
      });
    });
}
