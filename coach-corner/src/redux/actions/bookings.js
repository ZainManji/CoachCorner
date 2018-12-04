// @flow
import actionTypes from "../actionTypes";
import { dispatch } from "../configureStore";
import makeRequest from "./makeRequest";


export function fetchBookings() {
  makeRequest({
    url: `/api/bookings`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_BOOKINGS,
        bookings: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_BOOKINGS_FAILURE,
        error: err,
      });
    });
}

export function fetchBookingByID(bookingID) {
  makeRequest({
    url: `/api/bookings/id/${bookingID}`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_BOOKING,
        booking: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_BOOKING_FAILURE,
        error: err,
      });
    });
}

export function fetchBookingsForDay(day) {
  makeRequest({
    url: `/api/bookings/day/${day}`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_BOOKINGS,
        bookings: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_BOOKINGS_FAILURE,
        error: err,
      });
    });
}


export function addBooking(booking) {
  // Make a request to add the booking to DB, and on response success, dispatch
  makeRequest({
    url: `/api/bookings/add`,
    method: "POST",
    data: booking
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_BOOKING,
        booking: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_BOOKING_FAILURE,
        error: err,
      });
    });
}

export function updateBooking(booking) {
  // Make a request to update the booking to DB, and on response success, dispatch
  makeRequest({
    url: `/api/bookings/update`,
    method: "POST",
    data: booking
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_BOOKING,
        booking: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_BOOKING_FAILURE,
        error: err,
      });
    });
}

export function deleteBooking(booking) {
  // Make a request to delete the booking from DB, and on response success, dispatch
  makeRequest({
    url: `/api/bookings/delete`,
    method: "POST",
    data: booking
  })
    .then(response => {
      dispatch({
        type: actionTypes.DELETE_BOOKING,
        booking: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.DELETE_BOOKING_FAILURE,
        error: err,
      });
    });
}
