// @flow

import mongoose, { Schema } from "mongoose";

const staffSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  dateCreated: {
    type: String
  }
});

export default mongoose.model("Staff", staffSchema);
