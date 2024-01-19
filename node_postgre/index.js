const express = require('express')
const router = require('./route/router')
const app = express()
app.use(express.json())
app.use('/api', router)
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server has started on PORT: ${PORT}`)
})