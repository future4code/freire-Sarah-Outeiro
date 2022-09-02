import { Request, Response } from 'express'
import insertUser from '../data/insertUser'
import { UserInput, UserData } from '../types'

export default async function createUser(req: Request, res: Response) {
    try {
        const {name, email, password}: UserInput = req.body

        if(!name || !email || !password ) {
            throw new Error("O name, email password devem ser passados")
        }

        const userInsert: UserData = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        const answer = await insertUser(userInsert)

        res.status(201).send({ message: answer })

    } catch (error: any) {
        res.status(500).send({ message: "algo deu errado" })
    }
}