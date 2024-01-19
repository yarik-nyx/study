
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./MailService')
const tokenService = require('./TokenService')
const UserDto = require('../dtos/UserDTO')
const UserModel = require('../models/UserModel')
const ApiError = require('../exceptions/ApiErrors')

class UserService {
    async registration(email, password) {
        
            //проверка, существует ли пользователь
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`Пользователь с ${email} уже существует.`)
        }

        //хешируем пароль и создаем ссылку на подтверждение
        const hashPassword = await bcrypt.hash(password, 3)
        const confirmLink = uuid.v4()

        //создаем юзера в бд
        const user = await UserModel.create({email, password: hashPassword, confirmLink})

        //отправка сообщения
        await mailService.sendConfrimMail(email, `${process.env.API_URL}/api/activate/${confirmLink}`)

        //создаем дто и на ее payload создаем токен, затем сохраняем его в бд
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{
            ...tokens, 
            user: userDto
        }
    }

    async login(email, password) {
        
            //проверка, существует ли пользователь
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('Неверный логин или пароль')
        }

        const isPassEqual = await bcrypt.compare(password, user.password)
        if(!isPassEqual){
            throw ApiError.BadRequest(`Неверный логин или пароль`)
        }


        //создаем дто и на ее payload создаем токен, затем сохраняем его в бд
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{
            ...tokens, 
            user: userDto
        }
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnathorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        console.log(userData)
        console.log(tokenFromDb)
        if(!userData || !tokenFromDb){
            throw ApiError.UnathorizedError()
        }

        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{
            ...tokens, 
            user: userDto
        }

    }

    async confrimUser(confirmLink){
            const user = await UserModel.findOne({confirmLink}).exec()
            if(!user){
                throw ApiError.BadRequest('Пользователь не найден')
            }
            user.confirmed = true
            await user.save()
            const userDto = new UserDto(user)
            return userDto
    }

    async getUsers(){

        const data = await UserModel.find({}).exec()
        return data   
    }
}

module.exports = new UserService()