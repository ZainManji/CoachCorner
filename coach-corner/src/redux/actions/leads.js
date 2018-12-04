// @flow
import actionTypes from "../actionTypes";
import { dispatch } from "../configureStore";
import makeRequest from "./makeRequest";


export function fetchLeads() {
  makeRequest({
    url: `/api/leads`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_LEADS,
        leads: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_LEADS_FAILURE,
        error: err,
      });
    });
}


export function addLead(lead) {
  // Make a request to add the lead to DB, and on response success, dispatch
  makeRequest({
    url: `/api/leads/add`,
    method: "POST",
    data: lead
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_LEAD,
        lead: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_LEAD_FAILURE,
        error: err,
      });
    });
}

export function updateLead(lead) {
  // Make a request to update the lead to DB, and on response success, dispatch
  makeRequest({
    url: `/api/leads/update`,
    method: "POST",
    data: lead
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_LEAD,
        lead: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_LEAD_FAILURE,
        error: err,
      });
    });
}

export function deleteLead(lead) {
  // Make a request to delete the lead from DB, and on response success, dispatch
  makeRequest({
    url: `/api/leads/delete`,
    method: "POST",
    data: lead
  })
    .then(response => {
      dispatch({
        type: actionTypes.DELETE_LEAD,
        lead: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.DELETE_LEAD_FAILURE,
        error: err,
      });
    });
}
