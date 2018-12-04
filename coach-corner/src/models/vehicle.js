// @flow

import mongoose, { Schema } from "mongoose";

const vehicleSchema = new Schema({
  year: {
    type: String
  },
  make: {
    type: String
  },
  model: {
    type: String
  },
  engine: {
    type: String
  }
});

export default mongoose.model("Vehicle", vehicleSchema);
