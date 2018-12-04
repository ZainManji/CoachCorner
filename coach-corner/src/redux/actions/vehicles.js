// @flow
import actionTypes from "../actionTypes";
import { dispatch } from "../configureStore";
import makeRequest from "./makeRequest";


export function fetchVehicles() {
  makeRequest({
    url: `/api/vehicles`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_VEHICLES,
        vehicles: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_VEHICLES_FAILURE,
        error: err,
      });
    });
}

export function fetchVehicleYears() {
  makeRequest({
    url: `/api/vehicles/allYears`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_YEARS,
        years: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_YEARS_FAILURE,
        error: err,
      });
    });
}

export function fetchVehicleMakes(year) {
  makeRequest({
    url: `/api/vehicles/allMakes?year=${year}`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_MAKES,
        makes: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_MAKES_FAILURE,
        error: err,
      });
    });
}

export function fetchVehicleModels(year, make) {
  makeRequest({
    url: `/api/vehicles/allModels?year=${year}&make=${make}`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_MODELS,
        models: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_MODELS_FAILURE,
        error: err,
      });
    });
}

export function fetchVehicleEngines(year, make, model) {
  makeRequest({
    url: `/api/vehicles/allEngines?year=${year}&make=${make}&model=${model}`,
  })
    .then(response => {
      dispatch({
        type: actionTypes.SET_ENGINES,
        engines: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCH_ENGINES_FAILURE,
        error: err,
      });
    });
}
