// @flow

import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema({
  category: {
    type: String
  },
  name: {
    type: String
  },
  price: {
    type: Number
  },
  length: {
    type: Number
  },
  dateCreated: {
    type: String
  }
});

export default mongoose.model("Service", serviceSchema);
