// @flow

import { createStore, combineReducers } from "redux";

// Reducers
import bookingsReducer from "./reducers/bookings";
import leadsReducer from "./reducers/leads";
import reviewsReducer from "./reducers/reviews";
import servicesReducer from "./reducers/services";
import staffsReducer from "./reducers/staffs";
import usersReducer from "./reducers/users";
import vehiclesReducer from "./reducers/vehicles";

const reducers = combineReducers({
  bookings: bookingsReducer,
  leads: leadsReducer,
  reviews: reviewsReducer,
  services: servicesReducer,
  staffs: staffsReducer,
  users: usersReducer,
  vehicles: vehiclesReducer,
});

export const initStore = () => {
  const store = createStore(
    reducers
  );

  return store;
};
