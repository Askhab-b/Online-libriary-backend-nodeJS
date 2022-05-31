const Genre = require("../models/Genres.model");

module.exports.genresController = {
  postGenre: async (req, res) => {
    try {
      const genrePost = await Genre.create({
        title: req.body.title,
      });
      res.json(genrePost);
    } catch (error) {
      res.json("Жанр не создан");
    }
  },

  deleteGenre: async (req, res) => {
    try {
      const genreDelete = await Genre.findByIdAndRemove(req.params.id);
      res.json(genreDelete);
    } catch (error) {
      res.json("Жанр не удалён");
    }
  },

  patchGenre: async (req, res) => {
    try {
      const genrePatch = await Genre.findByIdAndUpdate({
        title: req.body.title,
      });
      res.json(genrePatch);
    } catch (error) {
      res.json("Жанр не изменён");
    }
  },

  findAllGenre: async (req, res) => {
    try {
      const AllGenres = await Genre.find();
      res.json(AllGenres);
    } catch (error) {
      res.json(error);
    }
  },

  findGenreId: async (req, res) => {
    try {
      const findGenresId = await Genre.findById(req.params.id);
      res.json(findGenresId);
    } catch (error) {
      res.json(error);
    }
  },
};
