// @flow
import actionTypes from "../actionTypes";
import { dispatch } from "../configureStore";
import makeRequest from "./makeRequest";


export function fetchStaff() {
  makeRequest({
    url: `/api/staffs`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_STAFF,
        staff: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_STAFF_FAILURE,
        error: err,
      });
    });
}

export function fetchStaffByEmail(email) {
  makeRequest({
    url: `/api/staffs/email/${email}`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_STAFF,
        staff: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_STAFF_FAILURE,
        error: err,
      });
    });
}

export function addStaffMember(staffMember) {
  // Make a request to add the staff member to DB, and on response success, dispatch
  makeRequest({
    url: `/api/staffs/add`,
    method: "POST",
    data: staffMember
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_STAFF_MEMBER,
        staffMember: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_STAFF_MEMBER_FAILURE,
        error: err,
      });
    });
}

export function updateStaffMember(staffMember) {
  // Make a request to update the staff member to DB, and on response success, dispatch
  makeRequest({
    url: `/api/staffs/update`,
    method: "POST",
    data: staffMember
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_STAFF_MEMBER,
        staffMember: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_STAFF_MEMBER_FAILURE,
        error: err,
      });
    });
}

export function deleteStaffMember(staffMember) {
  // Make a request to delete the staff member from DB, and on response success, dispatch
  makeRequest({
    url: `/api/staffs/delete`,
    method: "POST",
    data: staffMember
  })
    .then(response => {
      dispatch({
        type: actionTypes.DELETE_STAFF_MEMBER,
        staffMember: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.DELETE_STAFF_MEMBER_FAILURE,
        error: err,
      });
    });
}
