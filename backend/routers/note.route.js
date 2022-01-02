const { getNote, setNote } = require("../controller/note.controller");
const express = require("express");
const router = express.Router();

router.route("/").get(getNote);
router.route("/set").post(setNote);

module.exports = router;
