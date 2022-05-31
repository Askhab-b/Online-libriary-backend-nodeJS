const {Router} = require('express')
const { reviewsController } = require('../controllers/Reviewsbook.controller')

const router = Router()

router.post('/admin/reviews', reviewsController.reviewPost)
router.delete('/admin/reviews/:id', reviewsController.deleteReview)
router.patch('/admin/reviews/:id', reviewsController.patchReview)
router.get('/admin/reviews/:id', reviewsController.ReviewFindId)
router.get('/admin/reviews', reviewsController.FindAllReviews)




module.exports = router