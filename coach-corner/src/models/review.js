// @flow

import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  name: {
    type: String
  },
  review: {
    type: String
  },
  title: {
    type: String
  },
  bookingID: {
    type: Schema.Types.ObjectId,
    ref: "Booking"
  },
  dateCreated: {
    type: String
  }
});

export default mongoose.model("Review", reviewSchema);
