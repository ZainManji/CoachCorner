// @flow

import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  services: {
    type: Array
  },
  vehicle: {
    type: Object
  },
  contactInfo: {
    type: Object
  },
  date: {
    type: Object
  },
  finalInfo: {
    type: Object
  },
  dateCreated: {
    type: String
  },
  assignedTo: {
    type: Object
  }
});

export default mongoose.model("Booking", bookingSchema);
