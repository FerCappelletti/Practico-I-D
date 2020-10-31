const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const users_routes = require("./routes/users");
const notes_routes = require("./routes/notes");

//settings
app.set("port", process.env.PORT ? process.env.PORT : 3000);

//middlewares
app.use(cors({ origin: "*" }), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.use('/api/users', users_routes);
app.use('/api/notes', notes_routes);

module.exports = app;