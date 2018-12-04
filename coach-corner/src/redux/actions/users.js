// @flow
import actionTypes from "../actionTypes";
import { dispatch } from "../configureStore";
import makeRequest from "./makeRequest";


export function fetchUsers() {
  makeRequest({
    url: `/api/users`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_USERS,
        users: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_USERS_FAILURE,
        error: err,
      });
    });
}

export function fetchUsersByEmail(email) {
  makeRequest({
    url: `/api/users/email/${email}`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_USERS,
        users: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_USERS_FAILURE,
        error: err,
      });
    });
}

export function addUser(user) {
  // Make a request to add the user to DB, and on response success, dispatch
  makeRequest({
    url: `/api/users/add`,
    method: "POST",
    data: user
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_USER,
        user: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_USER_FAILURE,
        error: err,
      });
    });
}

export function updateUser(user) {
  // Make a request to update the user to DB, and on response success, dispatch
  makeRequest({
    url: `/api/users/update`,
    method: "POST",
    data: user
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_USER,
        user: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_USER_FAILURE,
        error: err,
      });
    });
}

export function deleteUser(user) {
  // Make a request to delete the user from DB, and on response success, dispatch
  makeRequest({
    url: `/api/users/delete`,
    method: "POST",
    data: user
  })
    .then(response => {
      dispatch({
        type: actionTypes.DELETE_USER,
        user: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.DELETE_USER_FAILURE,
        error: err,
      });
    });
}
