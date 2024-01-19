const db = require('../db')

class UserController{
    async createUser(req, res){
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO person(name, surname) VALUES ($1, $2) RETURNING *`,[name, surname])
        res.status(201).json(
            newPerson.rows[0]
        )
    }

    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person')
        res.status(200).json(
            users.rows
        )
    }

    async getUser(req, res){
        const {id} = req.params
        const user = await db.query('SELECT * FROM person WHERE id = $1', [id])
        res.status(200).json(
            user.rows
        )
    }

    async updateUser(req, res){
        const {id, name, surname} = req.body
        const updatedData = await db.query('UPDATE person set name = $1, surname = $2 WHERE id = $3 RETURNING *', [name, surname, id])
        res.status(200).json(
            updatedData.rows
        )
    }

    async deleteUser(req, res){
        const {id} = req.params
        const user = await db.query('DELETE FROM person WHERE id = $1', [id])
        res.status(200).json(
            user.rows
        )
    }
}

module.exports = new UserController()