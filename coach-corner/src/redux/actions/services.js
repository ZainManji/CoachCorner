// @flow
import actionTypes from "../actionTypes";
import { dispatch } from "../configureStore";
import makeRequest from "./makeRequest";


export function fetchServices() {
  makeRequest({
    url: `/api/services`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_SERVICES,
        services: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_SERVICES_FAILURE,
        error: err,
      });
    });
}


export function addService(service) {
  // Make a request to add the service to DB, and on response success, dispatch
  makeRequest({
    url: `/api/services/add`,
    method: "POST",
    data: service
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_SERVICE,
        service: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_SERVICE_FAILURE,
        error: err,
      });
    });
}

export function updateService(service) {
  // Make a request to update the service to DB, and on response success, dispatch
  makeRequest({
    url: `/api/services/update`,
    method: "POST",
    data: service
  })
    .then(response => {
      dispatch({
        type: actionTypes.UPDATE_SERVICE,
        service: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_SERVICE_FAILURE,
        error: err,
      });
    });
}

export function deleteService(service) {
  // Make a request to delete the service from DB, and on response success, dispatch
  makeRequest({
    url: `/api/services/delete`,
    method: "POST",
    data: service
  })
    .then(response => {
      dispatch({
        type: actionTypes.DELETE_SERVICE,
        service: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.DELETE_SERVICE_FAILURE,
        error: err,
      });
    });
}
