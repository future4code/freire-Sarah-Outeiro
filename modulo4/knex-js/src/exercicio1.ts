import {Request, Response} from 'express'
import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import connection from './connection'

console.log("[Sarah] Conectando ao banco")

const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen (3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is runnig in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

