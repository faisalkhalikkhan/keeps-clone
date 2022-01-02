const Note = require("../models/note.model");

exports.getNote = async (req, res) => {
  // const body = req.body;
  res.json({ note: "lol" });
};

exports.setNote = async (req, res) => {
  const body = req.body;
  const newNote = new Note(body);
  newNote
    .save()
    .then((response) => res.json(response))
    .catch((e) => res.json(e));
};
exports.deleteNote = async (req, res) => {
  const id = req.params.id;
  Note.findByIdAndDelete(id)
    .then((response) => res.json({ message: "successful!" }))
    .catch((e) => res.json(e));
}
