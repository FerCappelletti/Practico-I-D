const Note = require("../models/Note");

const get = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.status(201).json(note);
};

const getNotes = async (req, res) => {
	//find by group
  const notes = await Note.find({state: req.body.state});
  console.log(notes);
  res.json(notes);
};

const create = async (req, res) => {
  const { title, description, date, author, state } = req.body;
  const note = new Note({
    title,
    description,
    date,
    author,
    state,
  });

  await note.save();
  res.status(201).json({ message: "OK" });
};

const update = async (req, res) => {
	const { title, description, author, state } = req.body;

	const note = await Note.findOneAndUpdate(req.params.id, {
    title,
    description,
    author,
    state,
  });
	res.status(200).json(note);
};

const $delete = async (req, res) => {
	// not sure to use this
  const note = await Note.findByIdAndRemove(req.params.id);
  res.status(200).json(note);
};

module.exports = {
  get,
  getNotes,
  create,
  update,
  $delete,
};
