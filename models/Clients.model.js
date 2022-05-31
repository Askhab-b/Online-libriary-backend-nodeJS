const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  isBlocked: {
    type: Boolean
  },
  name: String,
  bookRented: [
    {
      ref: "Book",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
