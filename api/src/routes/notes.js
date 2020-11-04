const express = require("express");
const api = express.Router();
const noteController = require("../controllers/notes");

api.get("/:group", noteController.getNotes);
api.post("/", noteController.create);
api
  .route("/:id")
  .patch( noteController.edit)
  .delete(noteController.$delete);
api.patch('/update/:id', noteController.update)
module.exports = api;
