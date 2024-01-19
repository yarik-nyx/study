const express = require('express')
const Docker = require('dockerode')

const app = express()
const port = 3030

const docker = new Docker()

const container = await docker.createContainer({
    Image: 'userbot:1.0',
    name: 'userbot2',
    
})

app.get('/', async(req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`server started on port: ${port}`);
})