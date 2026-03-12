const express = require("express");
const router = express.Router();

const {
  createResource,
  getResources,
  updateResource,
  deleteResource
} = require("../controllers/resourceController");

router.post("/", createResource);
router.get("/", getResources);
router.put("/:id", updateResource);
router.delete("/:id", deleteResource);

module.exports = router;