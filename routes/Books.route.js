const { Router } = require("express");
const { booksController } = require("../controllers/Books.controller");

const router = Router();

router.post("/admin/books/v", booksController.postBooks);
router.delete("/admin/books/:id", booksController.deleteBooks);
router.patch("/admin/books/:id", booksController.patchBooks);
router.get("/admin/books", booksController.findAllBooks);
router.get("/admin/books/:id", booksController.findById);

module.exports = router;
