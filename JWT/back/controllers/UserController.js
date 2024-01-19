const UserService = require('../services/UserService')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/ApiErrors')

class UserController{
    async registration(req, res, next) {
        try{
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array()))
            }
            const{email, password} = req.body
            const userData = await UserService.registration(email, password)

            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly: true})
            res.status(201).json(userData)
        } catch(e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try{
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array()))
            }

            const{email, password} = req.body
            const userData = await UserService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly: true})
            res.status(200).json(userData)
        } catch(e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try{
            const {refreshToken} = req.cookies
            const token = await UserService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch(e) {
            next(e)
        }
    }

    async confirmUser(req, res, next) {
        try{
            const {link} = req.params
            if(!link){
                res.status(400)
            }
            const user = await UserService.confrimUser(link)

            res.redirect('/api/signin')
        } catch(e) {
            next(e)
        }
    }

    async refreshToken(req, res, next) {
        try{
            const{refreshToken} = req.cookies
            const userData = await UserService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly: true})
            res.status(201).json(userData)
        } catch(e) {
            next(e)
        }
    }

    async getUsers(req, res, next) {
        try{
            const data = await UserService.getUsers()
            res.status(200).json({
                status:"success",
                message: data
            })
        } catch(e) {
            next(e)
        }
    }
}

module.exports = new UserController()