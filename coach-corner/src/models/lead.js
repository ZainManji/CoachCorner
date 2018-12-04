// @flow

import mongoose, { Schema } from "mongoose";

const leadSchema = new Schema({
  services: {
    type: Object
  },
  contactInfo: {
    type: Object
  },
  vehicle: {
    type: Object
  },
  dateCreated: {
    type: String
  }
});

export default mongoose.model("Lead", leadSchema);
