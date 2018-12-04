
// @flow

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String
  },
  businessHours: {
    type: Object
  },
  location: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  email: {
    type: String
  }
});

export default mongoose.model("User", userSchema);
