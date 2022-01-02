const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: String,
  description: String,
  createdAt: {
    type: String,
    default: new Date(),
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
