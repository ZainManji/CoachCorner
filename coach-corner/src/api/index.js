// @flow

import { Router } from "express";

const router = new Router();

router.use("/bookings", require("./bookings").default);
router.use("/leads", require("./leads").default);
router.use("/reviews", require("./reviews").default);
router.use("/services", require("./services").default);
router.use("/staffs", require("./staffs").default);
router.use("/users", require("./users").default);
router.use("/vehicles", require("./vehicles").default);

export default router;
