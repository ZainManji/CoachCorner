// @flow
import keymirror from "key-mirror";

const actionTypes = keymirror({

  // Bookings
  SET_BOOKINGS: null,
  SET_BOOKING: null,
  FETCH_BOOKINGS_FAILURE: null,
  FETCH_BOOKING_FAILURE: null,
  UPDATE_BOOKING: null,
  UPDATE_BOOKING_FAILURE: null,
  DELETE_BOOKING: null,
  DELETE_BOOKING_FAILURE: null,

  // Leads
  SET_LEADS: null,
  FETCH_LEADS_FAILURE: null,
  UPDATE_LEAD: null,
  UPDATE_LEAD_FAILURE: null,
  DELETE_LEAD: null,
  DELETE_LEAD_FAILURE: null,

  // Reviews
  SET_REVIEWS: null,
  SET_REVIEW: null,
  FETCH_REVIEWS_FAILURE: null,
  FETCH_REVIEW_FAILURE: null,
  UPDATE_REVIEW: null,
  UPDATE_REVIEW_FAILURE: null,
  DELETE_REVIEW: null,
  DELETE_REVIEW_FAILURE: null,

  // Services
  SET_SERVICES: null,
  FETCH_SERVICES_FAILURE: null,
  UPDATE_SERVICE: null,
  UPDATE_SERVICE_FAILURE: null,
  DELETE_SERVICE: null,
  DELETE_SERVICE_FAILURE: null,


  // Staff
  SET_STAFF: null,
  FETCH_STAFF_FAILURE: null,
  UPDATE_STAFF_MEMBER: null,
  UPDATE_STAFF_MEMBER_FAILURE: null,
  DELETE_STAFF_MEMBER: null,
  DELETE_STAFF_MEMBER_FAILURE: null,


  // Users
  SET_USERS: null,
  FETCH_USERS_FAILURE: null,
  UPDATE_USER: null,
  UPDATE_USER_FAILURE: null,
  DELETE_USER: null,
  DELETE_USER_FAILURE: null,


  // Vehicles
  SET_VEHICLES: null,
  FETCH_VEHICLES_FAILURE: null,
  SET_YEARS: null,
  FETCH_YEARS_FAILURE: null,
  SET_MAKES: null,
  FETCH_MAKES_FAILURE: null,
  SET_MODELS: null,
  FETCH_MODELS_FAILURE: null,
  SET_ENGINES: null,
  FETCH_ENGINES_FAILURE: null,
});

export default actionTypes;
