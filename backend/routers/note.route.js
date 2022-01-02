const { getNote, setNote, deleteNote} = require("../controller/note.controller");
const express = require("express");
const router = express.Router();

router.route("/").get(getNote);
router.route("/set").post(setNote);
router.route("/delete/:id").post(deleteNote);
module.exports = router;
