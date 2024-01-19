const jwt = require('jsonwebtoken')
const TokenModel = require('../models/TokenModel')
class TokenService {
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn:'30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn:'30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken){
        const tokenData = await TokenModel.findOne({user: userId})

        if(tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }

        const token = await TokenModel.create({user: userId, refreshToken})
        return token


    }

    async removeToken(refreshToken){
        const tokenData = await TokenModel.deleteOne({refreshToken})
        return tokenData
    }

    async findToken(refreshToken){
        const tokenData = await TokenModel.findOne({refreshToken})
        return tokenData
    }

    validateRefreshToken(refreshToken){
        try{
            const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN)
            return userData
        } catch(e){
            return null
        }
    }

    validateAccessToken(accessToken){
        try{
            const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN)
            return userData
        } catch(e){
            return null
        }
    }
}

module.exports = new TokenService()