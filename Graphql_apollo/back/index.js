const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const app = express()
const cors = require('cors')
const schema = require('./ql/schema')
const users = [
    {id: 1, username: 'zxc', age: 18}, 
    {id: 2, username: 'qwe', age: 28}, 
]
const PORT = process.env.PORT || 5000

app.use(cors())

const root = {
    getAllUsers: () => {
        return users
    },
    getUser: ({id}) => {
        return users.find(user => user.id == id)
    },
    createUser: (data) => {
        const id = Date.now()
        const {input} = data
        const user =  {
            id, 
            ...input
        }
        users.push(user)
        return user
        
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root
}))


app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})