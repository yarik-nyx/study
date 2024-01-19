const Router = require('express').Router
const UserController = require('../controllers/UserController')
const ValidatorSignUp = require('../validations/signUp')
const authMid = require('../middlewares/authMid')

const router = new Router()

router.post('/signup', ValidatorSignUp, UserController.registration)
router.post('/signin', ValidatorSignUp, UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.confirmUser)
router.get('/refresh', UserController.refreshToken)
router.get('/users',authMid, UserController.getUsers)

module.exports = router