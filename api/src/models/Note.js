const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: String,
    description: {
      type: String,
      required: true,
    },
    username: String,
    date: {
      type: Date,
      default: Date.now,
    },
    group: String,
  },
  {
    timestamps: true,
  }
);
module.exports = model("Note", noteSchema);
