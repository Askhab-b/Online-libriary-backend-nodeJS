const {Router} = require('express')
const { genresController } = require('../controllers/Genres.controller')

const router = Router()

router.post('/admin', genresController.postGenre)
router.delete('/admin/:id', genresController.deleteGenre)
router.patch('/admin/:id', genresController.patchGenre)
router.get('/admin', genresController.findAllGenre)
router.get('/admin/:id', genresController.findGenreId)




module.exports = router