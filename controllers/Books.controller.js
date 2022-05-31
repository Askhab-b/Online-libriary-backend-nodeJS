const Book = require("../models/Books.model");

module.exports.booksController = {
  postBooks: async (req, res) => {
    try {
      const bookChange = await Book.create({
        title: req.body.title,
        client: req.body.title,
        genre: req.body.genre,
      });

      res.json(bookChange);
    } catch (error) {
      res.json(error);
    }
  },

  deleteBooks: async (req, res) => {
    try {
      const bookDelete = await Book.findByIdAndRemove(req.params.id);
      res.json(bookDelete);
    } catch (error) {
      res.json("Книга не удалена");
    }
  },

  patchBooks: async (req, res) => {
    try {
      const PatchBook = await Book.findByIdAndUpdate({
        title: req.body.title,
        client: req.body.title,
        genre: req.body.genre,
        review: req.body.review,
        description: req.body.description,
      });
      res.json(PatchBook);
    } catch (error) {
      res.json("Книга не изменена");
    }
  },

  findAllBooks: async (req, res) => {
    try {
      const AllBooks = await Book.find();
      res.json(AllBooks);
    } catch (error) {
      res.json(error);
    }
  },

  findById: async (req, res) => {
    try {
      const FindIdBook = await Book.findById(req.params.id);
      res.json(FindIdBook);
    } catch (error) {
      res.json("Книга не найдена");
    }
  },
};
