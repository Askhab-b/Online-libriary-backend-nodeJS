const Book = require("../models/Books.model");
const Client = require("../models/Clients.model");

module.exports.clientController = {
  postClient: async (req, res) => {
    try {
      const clientPost = await Client.create({
        isBlocked: req.body.isBlocked,
        name: req.body.name,
        bookRented: req.body.bookRented,
      });
      res.json(clientPost);
    } catch (error) {
      res.json(error);
    }
  },

  deleteClient: async (req, res) => {
    try {
      const clientDelete = await Client.findByIdAndRemove(req.params.id);
      res.json(clientDelete);
    } catch (error) {
      res.json(error);
    }
  },

  patchClient: async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);
      const book = await Book.findById(req.body.bookId);

      if (client.isBlocked === false) {
        if (client.bookRented.length < 3) {
          if (book.isRented === null) {
            await Client.findByIdAndUpdate({
              $push: {
                bookRented: req.body.bookRented,
              },
            });

            await Book.findByIdAndUpdate(req.body.bookId, {
              client: req.params.id,
            });
            res.json("Книга арендована");
          } else {
            res.json("эта книга уже арендована другим пользователем");
          }
        } else {
          res.json("нельзя арендовать больше 3-х книг одновременно");
        }
      } else {
        res.json("вы заблокированы");
      }
    } catch (error) {
      res.json(error);
    }
  },

  getAllClients: async (req, res) => {
    try {
      const clientsAll = await Client.find();
      res.json(clientsAll);
    } catch (error) {
      res.json(error);
    }
  },

  getClientsId: async (req, res) => {
    try {
      const clientId = await Client.findById(req.params.id);
      res.json(clientId);
    } catch (error) {
      res.json(error);
    }
  },


Block: async (req, res) => {
    try {
    await Client.findByIdAndUpdate(req.params.id, {
    isRented: [],
    isBlocked: true
    }) 
    await Book.findByIdAndUpdate(req.body.bookRented, {
        client: null
    }) 
    res.json('Client is blocked')
    } catch (error) {
    res.json(error)    
    }
}



};
