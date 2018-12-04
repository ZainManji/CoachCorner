
// @flow
import { Router } from "express";
import moment from "moment-timezone";
import { ObjectId } from "mongodb";
import {
  Lead
} from "../models";

const router = new Router();

router.get("/", async (req, res, next) => {
  const leads = await Lead.find();

  res.status(200).json(leads);
});

router.post("/add", async (req, res, next) => {
  const lead = req.body;
  const newLead = new Lead({
    services: lead.services,
    vehicle: lead.vehicle,
    contactInfo: lead.contactInfo,
    dateCreated: moment()
  });
  newLead.save();
  res.status(200).json(newLead);
});

router.post("/update", async (req, res, next) => {
  const leadToUpdate = req.body;
  const lead = await Lead.findOne({ _id: leadToUpdate._id });
  Object.keys(leadToUpdate).forEach((key) => {
    lead[key] = leadToUpdate[key];
  });
  lead.save();
  res.status(200).json(lead);
});

router.post("/delete", async (req, res, next) => {
  const lead = req.body;
  await Lead.findOneAndDelete({ _id: lead._id });
  res.status(200).json(lead);
});

export default router;
