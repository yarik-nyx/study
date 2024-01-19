const Router = require('express')
const router = Router()
const UserController = require('../controllers/UserController')


router.post('/user', UserController.createUser)
router.get('/users', UserController.getUsers)
router.get('/user/:id', UserController.getUser)
router.put('/user', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

module.exports = router