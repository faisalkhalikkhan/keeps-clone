const {
  getNote,
  setNote,
  updateNote,
  deleteNote,
} = require("../controller/note.controller");
const express = require("express");
const router = express.Router();

router.route("/").get(getNote);
router.route("/set").post(setNote);
router.route("/update").post(updateNote);
router.route("/delete").post(deleteNote);
module.exports = router;
