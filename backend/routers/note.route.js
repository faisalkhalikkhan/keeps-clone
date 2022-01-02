const {
  getNote,
  setNote,
  updateNote,
} = require("../controller/note.controller");
const express = require("express");
const router = express.Router();

router.route("/").get(getNote);
router.route("/set").post(setNote);
router.route("/update").post(updateNote);

module.exports = router;
