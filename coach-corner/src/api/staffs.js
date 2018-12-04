// @flow
import { Router } from "express";
import moment from "moment-timezone";
import { ObjectId } from "mongodb";
import {
  Staff
} from "../models";

const router = new Router();

router.get("/", async (req, res, next) => {
  const staff = await Staff.find();

  res.status(200).json(staff);
});

router.get("/email/:email", async (req, res, next) => {
  const staff = await Staff.find({
    email: req.params.email
  });

  res.status(200).json(staff);
});

router.post("/add", async (req, res, next) => {
  const staffMember = req.body;
  const newStaffMember = new Staff({
    name: staffMember.name,
    email: staffMember.email,
    phone: staffMember.phone,
    dateCreated: moment()
  });
  newStaffMember.save();
  res.status(200).json(newStaffMember);
});

router.post("/update", async (req, res, next) => {
  const staffMemberToUpdate = req.body;
  const staffMember = await Staff.findOne({ _id: staffMemberToUpdate._id });
  Object.keys(staffMemberToUpdate).forEach((key) => {
    staffMember[key] = staffMemberToUpdate[key];
  });
  staffMember.save();
  res.status(200).json(staffMember);
});

router.post("/delete", async (req, res, next) => {
  const staffMember = req.body;
  await Staff.findOneAndDelete({ _id: staffMember._id });
  res.status(200).json(staffMember);
});

export default router;
