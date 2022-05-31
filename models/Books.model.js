const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
  title: String,
  client: {
    ref: "Client",
    type: mongoose.SchemaTypes.ObjectId,
  },
  genre: {
    ref: "Genre",
    type: mongoose.SchemaTypes.ObjectId,
  },
  isRented: {
    type: Boolean,
  },
});

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;


