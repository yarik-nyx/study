import express from 'express'
import { getCarsRouter } from './router'
import { db } from './db/db'


export const app = express()


const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)


app.use("/cars", getCarsRouter(db))

