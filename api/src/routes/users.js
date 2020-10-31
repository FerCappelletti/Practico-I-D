const express = require("express");
const api = express.Router();

const userController = require('../controllers/users')

api.get("/", userController.get);
api.post("/", userController.create);
api.delete("/:id", userController.$delete);

module.exports = api;
