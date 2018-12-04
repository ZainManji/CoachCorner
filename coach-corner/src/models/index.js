// @flow

import mongoose from "mongoose";

export { default as Booking } from "./booking";
export { default as Lead } from "./lead";
export { default as Review } from "./review";
export { default as Service } from "./service";
export { default as Staff } from "./staff";
export { default as User } from "./user";
export { default as Vehicle } from "./vehicle";

const MONGODB_URI = "mongodb://localhost:27017/CoachCorner";


mongoose.connect(MONGODB_URI).then(
  () => { console.log("Database is connected!!") },
  err => { console.log(`Cannot connect to database: ${err}`) }
);

export const connection = mongoose.connection;
