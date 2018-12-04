// @flow
import { Router } from "express";
import moment from "moment-timezone";
import { ObjectId } from "mongodb";
import {
  Review
} from "../models";

const router = new Router();

router.get("/", async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json(reviews);
});

router.get("/bookingID/:bookingID", async (req, res, next) => {
  const review = await Review.findOne({
    bookingID: ObjectId(req.params.bookingID)
  });

  res.status(200).json(review);
});

router.post("/add", async (req, res, next) => {
  const review = req.body;
  const newReview = new Review({
    review: review.review,
    title: review.title,
    bookingID: review.bookingID,
    dateCreated: moment()
  });
  newReview.save();
  res.status(200).json(newReview);
});

router.post("/update", async (req, res, next) => {
  const reviewToUpdate = req.body;
  const review = await Review.findOne({ _id: reviewToUpdate._id });
  Object.keys(reviewToUpdate).forEach((key) => {
    review[key] = reviewToUpdate[key];
  });
  review.save();
  res.status(200).json(review);
});

router.post("/delete", async (req, res, next) => {
  const review = req.body;
  await Review.findOneAndDelete({ _id: review._id });
  res.status(200).json(review);
});

export default router;
