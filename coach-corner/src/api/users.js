// @flow
import { Router } from "express";
import moment from "moment-timezone";
import { ObjectId } from "mongodb";
import {
  User
} from "../models";

const router = new Router();

router.get("/", async (req, res, next) => {
  const users = await User.find();

  res.status(200).json(users);
});

router.get("/email/:email", async (req, res, next) => {
  const users = await User.find({
    email: req.params.email
  });

  res.status(200).json(users);
});

router.post("/add", async (req, res, next) => {
  const user = req.body;
  const newUser = new User({
    services: user.services,
    vehicle: user.vehicle,
    contactInfo: user.contactInfo,
    date: user.date,
    finalInfo: user.finalInfo,
    dateCreated: moment()
  });
  newUser.save();
  res.status(200).json(newUser);
});

router.post("/update", async (req, res, next) => {
  const userToUpdate = req.body;
  const user = await User.findOne({ _id: userToUpdate._id });
  Object.keys(userToUpdate).forEach((key) => {
    user[key] = userToUpdate[key];
  });
  user.save();
  res.status(200).json(user);
});

router.post("/delete", async (req, res, next) => {
  const user = req.body;
  await User.findOneAndDelete({ _id: user._id });
  res.status(200).json(user);
});

export default router;
