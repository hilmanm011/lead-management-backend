const express = require("express");
const router = express.Router();

// Import routes
const leadRoutes = require("./leads");

router.use("/leads", leadRoutes);

module.exports = router;
