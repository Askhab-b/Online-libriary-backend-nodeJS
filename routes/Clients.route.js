const {Router} = require('express')
const { clientController } = require('../controllers/Clients.controller')

const router = Router()

router.post('/client', clientController.postClient)
router.delete('/client/:id', clientController.deleteClient)
router.patch('/client/:id', clientController.patchClient)
router.get('/client', clientController.getAllClients)
router.get('/client/:id', clientController.getClientsId)




module.exports = router