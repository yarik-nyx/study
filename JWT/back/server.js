require('dotenv').config();
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const { connectDb } = require('./db/db.js');
const router = require('./router/index.js');
const errorMid = require('./middlewares/errorMid.js')


const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin:process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMid)


app.listen(process.env.PORT, (err) => {
    if(err){
        console.log(err)
        return
    }
    connectDb(process.env.DB_URL)
    console.log(`Server has started on port: ${process.env.PORT}`)
})