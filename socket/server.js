
const express = require('express')
const app = express()

const http = require('http').createServer(app)

const io = require('socket.io')(http)

const db = new Map()


app.use(express.static(__dirname + '/assets'))
app.use(express.json())



app.post('/', (req, res) => {
    const {roomid, username} = req.body
    res.send({
        success: true,
        roomid: roomid,
        username: username
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`)

    socket.on('CHAT:JOIN', ({roomid, username}) => {
        if(!db.has(roomid)){
            db.set(roomid, new Map().set(username, new Map()))
        } else {
            db.get(roomid).set(username, new Map())
        }
        const data = db.get(roomid)
        console.log()
        
        socket.emit('CHAT:JOINED', {roomid, username, data})
    })

    socket.on('CHAT:NEW_MESSAGE', ({roomid, username, message}) => {
        console.log(`Back - ${roomid}:${username}:${message}`)
        db.get(roomid).get(username).set(new Date().getUTCDate(), message)
        socket.emit('CHAT:RECEIVED_MESSAGE', {username, message})
        
    })
})

http.listen(3003, () => {
    console.log('Server get started')
})