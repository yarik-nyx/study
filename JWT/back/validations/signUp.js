const {body} = require('express-validator')

const signUp = [
    body('email', 'Введите почту').isString().isEmail().withMessage('Неверный формат почты').isLength({
    min:10,
    max:40
    }).withMessage('Допустимое кол-во символов от 10 до 40'),
    body('password', 'Введите пароль').isString().isLength({
        min:6,
        max:40
    }).withMessage('Допустимое кол-во символов от 6 до 40') 
]

module.exports = signUp