const Note = require("../models/Note");


const getOne = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note)
}

const getNotes = async (req, res) => {
  const notes = await Note.find({ group: req.params.group });
  res.json(notes);
};

const create = async (req, res) => {
  const { title, description, date, username, group } = req.body;

  const note = new Note({
    title,
    description,
    date,
    username,
    group
  });
  await note.save();
  res.status(201).json({ message: "OK" });
};

const edit = async (req, res) => {
  const { title, description, username } = req.body;

  const note = await Note.findOneAndUpdate(req.params.id, {
    title,
    description,
    username
  });
  res.status(200).json(note);
};

const update = async (req, res) => {
  const note = await Note.updateOne(
    { _id: req.params.id },
    {
      $set: {
        group: req.body.group,
      },
    }
  );

  res.status(200).json({ message: "OK" });
};

const $delete = async (req, res) => {
  // not sure to use this
  const note = await Note.findByIdAndRemove(req.params.id);
  res.status(200).json(note);
};

module.exports = {
  getNotes,
  getOne,
  create,
  edit,
  update,
  $delete,
};
