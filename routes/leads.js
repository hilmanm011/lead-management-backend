const express = require("express");
const LeadController = require("../controllers/leadsController");

const router = express.Router();

router.post("/", LeadController.addLead);
router.get("/", LeadController.getLeads);
router.put("/:id", LeadController.updateLead);

module.exports = router;
