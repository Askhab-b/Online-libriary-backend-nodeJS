const Review = require("../models/Reviewsbook.model");

module.exports.reviewsController = {
  reviewPost: async (req, res) => {
    try {
      const postReview = Review.create({
        text: req.body.text,
        name: req.body.name,
        book: req.body.book,
      });
      res.json(postReview);
    } catch (error) {
      res.json(error);
    }
  },

  deleteReview: async (req, res) => {
    try {
      const reviewDelete = Review.findByIdAndRemove(req.params.id);
      res.json(reviewDelete);
    } catch (error) {
      res.json(error);
    }
  },

  patchReview: async (req, res) => {
    try {
      const reviewPatch = Review.findByIdAndUpdate({
        text: req.body.text,
        name: req.body.name,
        book: req.body.book,
      });
      res.json(reviewPatch);
    } catch (error) {
      res.json(error);
    }
  },

  ReviewFindId: async (req, res) => {
    try {
      const findByIdReview = Review.findById(req.params.id);
      res.json(findByIdReview);
    } catch (error) {
      res.json(error);
    }
  },

  FindAllReviews: async (req, res) => {
    try {
      const AllReviews = Review.find();
      res.json(AllReviews);
    } catch (error) {
      res.json(error);
    }
  },
};
