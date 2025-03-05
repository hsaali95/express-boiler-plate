import authRoutes from "./auth.routes";
const router = require("express").Router();

router.use("/", authRoutes);
module.exports = router;
