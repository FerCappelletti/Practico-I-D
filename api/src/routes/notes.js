const express = require("express");
const api = express.Router();
const noteController = require("../controllers/notes");

api.get("/", noteController.getNotes);
api.post("/", noteController.create);
api
  .route("/:id")
  .get(noteController.get)
  .patch( noteController.update)
  .delete(noteController.$delete);

module.exports = api;
