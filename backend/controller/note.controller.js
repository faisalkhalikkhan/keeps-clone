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

exports.updateNote = async (req, res) => {
  const { id, title, description } = req.body;
  const data = await Note.findById({ id });

  res.status(200).json({
    data: data,
    success: true,
  });
};
