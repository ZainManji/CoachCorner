// @flow
import { Router } from "express";
import moment from "moment-timezone";
import { ObjectId } from "mongodb";
import {
  Vehicle
} from "../models";

const router = new Router();

router.get("/", async (req, res, next) => {
  const vehicles = await Vehicle.find();

  res.status(200).json(vehicles);
});

router.get("/allYears", async (req, res, next) => {
  const years = await Vehicle.distinct('year');

  res.status(200).json(years);
});

// Takes req query params of year
router.get("/allMakes", async (req, res, next) => {
  const makes = await Vehicle.distinct('make', { year: req.query.year });

  res.status(200).json(makes);
});

// Takes req query params of year, make
router.get("/allModels", async (req, res, next) => {
  const models = await Vehicle.distinct(
    'model', { year: req.query.year, make: req.query.make }
  );

  res.status(200).json(models);
});

// Takes req query params of year, make, model
router.get("/allEngines", async (req, res, next) => {
  const engines = await Vehicle.distinct(
    'engine', { year: req.query.year, make: req.query.make, model: req.query.model }
  );

  res.status(200).json(engines);
});

export default router;
