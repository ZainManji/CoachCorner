
// @flow
import { Router } from "express";
import moment from "moment-timezone";
import { ObjectId } from "mongodb";
import {
  Booking
} from "../models";

const router = new Router();

router.get("/", async (req, res, next) => {
  const bookings = await Booking.find();

  res.status(200).json(bookings);
});

router.get("/id/:id", async (req, res, next) => {
  const booking = await Booking.findOne({
    _id: ObjectId(req.params.id)
  });

  res.status(200).json(booking);
});

router.get("/day/:day", async (req, res, next) => {
  const start = moment(new Date(req.params.day)).startOf('day');
  const end = moment(start).endOf('day');

  const bookings = await Booking.find().
    where('date.date').
    gt(start.toDate()).
    lt(end.toDate());

  res.status(200).json(bookings);
});

router.post("/add", async (req, res, next) => {
  const booking = req.body;
  const dateObj = {
    date: new Date(booking.date.date),
    time: new Date(booking.date.time)
  };

  const newBooking = new Booking({
    services: booking.services,
    vehicle: booking.vehicle,
    contactInfo: booking.contactInfo,
    date: dateObj,
    finalInfo: booking.finalInfo,
    dateCreated: moment(),
    assignedTo: null
  });
  newBooking.save();
  res.status(200).json(newBooking);
});

router.post("/update", async (req, res, next) => {
  const bookingToUpdate = req.body;
  const booking = await Booking.findOne({ _id: bookingToUpdate._id });
  Object.keys(bookingToUpdate).forEach((key) => {
    let keyValue = bookingToUpdate[key];
    if (key === "date") {
      keyValue = {
        date: new Date(bookingToUpdate[key].date),
        time: new Date(bookingToUpdate[key].time)
      };
    }
    booking[key] = keyValue;
  });
  booking.save();
  res.status(200).json(booking);
});

router.post("/delete", async (req, res, next) => {
  const booking = req.body;
  await Booking.findOneAndDelete({ _id: booking._id });
  res.status(200).json(booking);
});

export default router;
