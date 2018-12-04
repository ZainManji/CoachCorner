// @flow
import { Router } from "express";
import moment from "moment-timezone";
import { ObjectId } from "mongodb";
import {
  Service
} from "../models";

const router = new Router();

router.get("/", async (req, res, next) => {
  const services = await Service.find();

  res.status(200).json(services);
});

router.post("/add", async (req, res, next) => {
  const service = req.body;
  const newService = new Service({
    name: service.name,
    category: service.category,
    price: service.price,
    length: service.length,
    dateCreated: moment()
  });
  newService.save();
  res.status(200).json(newService);
});

router.post("/update", async (req, res, next) => {
  const serviceToUpdate = req.body;
  const service = await Service.findOne({ _id: serviceToUpdate._id });
  Object.keys(serviceToUpdate).forEach((key) => {
    service[key] = serviceToUpdate[key];
  });
  service.save();
  res.status(200).json(service);
});

router.post("/delete", async (req, res, next) => {
  const service = req.body;
  await Service.findOneAndDelete({ _id: service._id });
  res.status(200).json(service);
});

export default router;
