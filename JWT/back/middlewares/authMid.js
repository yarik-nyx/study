const ApiError = require('../exceptions/ApiErrors')
const tokenService = require('../services/TokenService')


module.exports = function(req, res, next) {
    try{
        const authHeader = req.headers.authorization
        if(!authHeader){
            return next(ApiError.UnathorizedError())
        }

        const accessToken = authHeader.split(" ")[1]

        if(!accessToken){
            return next(ApiError.UnathorizedError())
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if(!userData){
            return next(ApiError.UnathorizedError())
        }

        req.user = userData
        next()
    } catch(e){
        return next(ApiError.UnathorizedError())
    }
}