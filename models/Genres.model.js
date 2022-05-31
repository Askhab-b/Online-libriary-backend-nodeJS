const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  title: String,
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
